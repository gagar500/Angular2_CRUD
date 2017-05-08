import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { User } from "app/Users/user";


@Component({
    selector: 'users',
    templateUrl: './users.template.html'
})

export class UsersComponent implements OnInit {

    url = 'https://jsonplaceholder.typicode.com/users';
    users = new Array<User>();
    constructor(private _postService: PostService) { }

    ngOnInit(): void {
        this._postService.getServiceData(this.url).subscribe(res => {
            this.users = res;
        });

    }

    deleteUser(id:string){

        if(!confirm('Are you sure to delete this user?'))
            return;

       var index= this.users.findIndex(x=>x.id == id);
       if(index != -1)
          this.users.splice(index,1);
    
        this._postService.DeleteData(this.url +'/' + id).subscribe(res=>{
            console.log('deleted' + res);
        },
        err=>{
            console.error(err)
        },()=>{
            console.log('success');
        })
    }

  
}