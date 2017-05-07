import {Http} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class PostService{

    constructor(private _http:Http){}

    getServiceData(url:string){
        return this._http.get(url)
        .map(res=>res.json());
    }

}