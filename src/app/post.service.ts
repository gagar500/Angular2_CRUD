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

    PostData(url:string,data:String){
        console.log(data);
       return this._http.post(url,data)
           .map(res => res.json());
    }

    PutData(url:string,data:String){
        console.log(data);
       return this._http.put(url,data)
           .map(res => res.json());
    }

}