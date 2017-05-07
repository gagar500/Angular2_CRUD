import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
    selector: 'users',
    templateUrl: './users.template.html'
})

export class UsersComponent implements OnInit {

    url = 'https://jsonplaceholder.typicode.com/users';
    users = [];
    constructor(private _postService: PostService) { }

    ngOnInit(): void {
        this._postService.getServiceData(this.url).subscribe(res => {
            this.users = res;
        });

    }
}