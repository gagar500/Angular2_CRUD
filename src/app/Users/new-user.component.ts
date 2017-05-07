import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'new-user',
    templateUrl: 'new-user.template.html'
})

export class NewUserComponent {
    form: FormGroup;

    constructor(fb: FormBuilder) {
        this.form = fb.group(
            {

                name: [''], email: [''], phone: ['']
                ,
                address: fb.group(
                    { street: [''], suite: [''], city: [''], zipcode: [''] }
                )
            }
        );
    }

}