import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { EmailValidators } from './email-validators';
import { FormComponent } from '../prevent-unsave-guard.service';
import { PostService } from '../post.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'new-user',
    templateUrl: 'new-user.template.html'
})

export class NewUserComponent implements FormComponent, OnInit, OnDestroy {


    subscription=null;
    title;
    id=null;
    form: FormGroup;
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

        this._postService.PostData(this.url, this.form.value).subscribe(res => {
            console.log(res);
        }, err => {
            console.error(err);
        }, () => {
            this.form.reset();
            this._router.navigate(['Users']);
        });



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
  this.id =  this._route.snapshot.params["id"];
        this.title = this._route.snapshot.data["title"];

        if (this.id!=null) {
            this._postService.getServiceData(this.url + '/' + this.id).subscribe(res => {
                console.log(res);
                this.form.controls.name.setValue(res.name);
                this.form.controls.email.setValue(res.email);
                this.form.controls.phone.setValue(res.phone);
                this.form.controls.address.get('street').setValue(res.address.street);
                this.form.controls.address.get('suite').setValue(res.address.suite);
                this.form.controls.address.get('city').setValue(res.address.city);
                this.form.controls.address.get('zipcode').setValue(res.address.zipcode);

            }, err => {
                console.error(err);
                this._router.navigate(['NotFound'])
            }, () => {
                console.log('success');
            });
        }

    }

    ngOnDestroy(): void {
    //     if(this.subscription !=null){
    //         this.subscription.unsubscription();
   

    // }
    }
}