import {CanDeactivate} from '@angular/router';
import { FormGroup } from "@angular/forms";

export interface FormComponent{
    hasUnsavedChanges():Boolean;
}

export class PreventUnsavedChangesGuard implements  CanDeactivate<FormComponent>{
    canDeactivate(component: FormComponent) {
        if(component.hasUnsavedChanges())
            return confirm("Are you sure to leave the page?");

        return true;
    }

}