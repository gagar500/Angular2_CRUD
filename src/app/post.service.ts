import {Http} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { User } from "app/Users/user";


@Injectable()
export class PostService{

    constructor(private _http:Http){}

    getServiceData(url:string){
        return this._http.get(url)
        .map(res=>res.json());
    }

    PostData(url:string,user:User){
        console.log(JSON.stringify(user));
       return this._http.post(url,JSON.stringify(user))
           .map(res => res.json());
    }

    PutData(url:string,user:User){
        console.log(JSON.stringify(user));
       return this._http.put(url,JSON.stringify(user))
           .map(res => res.json());
    }

}