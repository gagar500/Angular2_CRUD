import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { EmailValidators } from './email-validators';
import { FormComponent } from '../prevent-unsave-guard.service';
import { PostService } from '../post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from "app/Users/user";

@Component({
    selector: 'new-user',
    templateUrl: 'new-user.template.html'
})

export class NewUserComponent implements FormComponent, OnInit, OnDestroy {


    subscription = null;
    title;
    id = null;
    form: FormGroup;
    user = new User();
    url = 'https://jsonplaceholder.typicode.com/users';

    constructor(fb: FormBuilder, private _postService: PostService, private _router: Router, private _route: ActivatedRoute) {

        this.form = fb.group(
            {

                name: ['', Validators.compose([Validators.required])],
                email: ['', Validators.compose([EmailValidators.validateEmail])],
                phone: ['']
                ,
                address: fb.group(
                    { street: [''], suite: [''], city: [''], zipcode: [''] }
                )
            }
        );
    }

    saveNewUser() {
        
        if (this.id) {
            this._postService.PutData(this.url +'/' + this.id, this.form.value).subscribe(res => {
                console.log('edit: ' + res);
            }, err => {
                console.error(err);
            }, () => {
                this.form.reset();
                this._router.navigate(['Users']);
            });
        } else {
            this._postService.PostData(this.url, this.form.value).subscribe(res => {
                console.log(res);
            }, err => {
                console.error(err);
            }, () => {
                this.form.reset();
                this._router.navigate(['Users']);
            });

        }




    }

    hasUnsavedChanges(): Boolean {
        if (this.form.dirty)
            return true;

        return false;
    }

    ngOnInit(): void {
        // this.subscription = this._route.params.subscribe(params => {
        //     this.id = params["id"];
        // })

        console.log(this.subscription);
        // this.subscription =this._route.snapshot.data["id"];
        this.id = this._route.snapshot.params["id"];
        this.title = this._route.snapshot.data["title"];

        if (!this.id)
            return;


        this._postService.getServiceData(this.url + '/' + this.id).subscribe(res => {
            console.log(res);
            this.user = res;
            this.form.controls.name.setValue(this.user.name);
            this.form.controls.email.setValue(this.user.email);
            this.form.controls.phone.setValue(this.user.phone);
            this.form.controls.address.get('street').setValue(this.user.address.street);
            this.form.controls.address.get('suite').setValue(this.user.address.suite);
            this.form.controls.address.get('city').setValue(this.user.address.city);
            this.form.controls.address.get('zipcode').setValue(this.user.address.zipcode);

        }, err => {
            console.error(err);
            this._router.navigate(['NotFound'])
        }, () => {
            console.log('success');
        });

    }

    ngOnDestroy(): void {
        //     if(this.subscription !=null){
        //         this.subscription.unsubscription();


        // }
    }
}