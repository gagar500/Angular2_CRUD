import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { EmailValidators } from './email-validators';
import { FormComponent } from '../prevent-unsave-guard.service';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
    selector: 'new-user',
    templateUrl: 'new-user.template.html'
})

export class NewUserComponent implements FormComponent {


    form: FormGroup;
    url = 'https://jsonplaceholder.typicode.com/users';

    constructor(fb: FormBuilder, private _postService: PostService, private _router: Router) {
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

}