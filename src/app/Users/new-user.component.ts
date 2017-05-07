import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import {EmailValidators} from './email-validators';

@Component({
    selector: 'new-user',
    templateUrl: 'new-user.template.html'
})

export class NewUserComponent {
    form: FormGroup;

    constructor(fb: FormBuilder) {
        this.form = fb.group(
            {

                name: ['',Validators.compose([Validators.required])],
                 email: ['',Validators.compose([EmailValidators.validateEmail])],
                  phone: ['']
                ,
                address: fb.group(
                    { street: [''], suite: [''], city: [''], zipcode: [''] }
                )
            }
        );
    }

}