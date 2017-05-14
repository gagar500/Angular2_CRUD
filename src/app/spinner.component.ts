import {Component,Input} from '@angular/core';

@Component({
    selector:'spinner',
    template:`
    <div *ngIf="visible">
        <i class="fa fa-spinner fa-4x" aria-hidden="true"></i>
    </div>
    `
})


export class SpinnerComponent{
    @Input() visible;
    
}