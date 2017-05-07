import {FormControl} from '@angular/forms';

export class EmailValidators{

static validateEmail(c: FormControl) {
  let EMAIL_REGEXP = new RegExp("([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$");

  return EMAIL_REGEXP.test(c.value) ? null : {
    validateEmail: {
      valid: false
    }
  };
}


}

