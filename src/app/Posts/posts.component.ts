import { Component, OnInit } from '@angular/core';
import { PostService } from "app/post.service";
import { SpinnerComponent } from '../spinner.component';
import {PaginationComponent} from '../pagination.component';

@Component({
    selector: 'posts',
    templateUrl: './posts.template.html',
    styleUrls: ['../app.component.css']
})

export class PostsComponent implements OnInit {

    comments = [];
    postDetails = null;
    isLoading;
    isLoadingComment;
    posts = [];
    users = [];
    pagedPosts = [];
    pageSize=10;
    url = 'https://jsonplaceholder.typicode.com/posts';
    urlUsers = 'https://jsonplaceholder.typicode.com/users';
    constructor(private _postService: PostService) { }


    ngOnInit(): void {
        this.isLoading = true;
        this._postService.getServiceData(this.url).subscribe(res => {
            this.posts = res;
              this.pagedPosts = this.getPostsInPage(1);
             console.log('post:'+ this.posts.length);
        });

        this._postService.getServiceData(this.urlUsers).subscribe(res => {
            this.users = res;
        }, null, () => {
            this.isLoading = false;
        });
       
    }

    ShowDetails(post) {
        this.postDetails = post;
        this.isLoadingComment = true;
        this._postService.getServiceData(this.url + '/' + this.postDetails.id + '/comments').subscribe(res => {
            this.comments = res;
        }, null, () => {
            this.isLoadingComment = false;
        });

    }

    GetUserPost(id){
         this.postDetails=null;
          this.isLoading = true;


          var url  =this.url;
          if(id != "")
            url = this.url +'?userId=' + id;

        this._postService.getServiceData(url).subscribe(res => {
            this.posts = res;
        },null,()=>{
            this.isLoading=false;
        });
    }

    onPageChanged(page) {
         this.pagedPosts = this.getPostsInPage(page);
 	}

      private getPostsInPage(page){
        var result = [];
 		var startingIndex = (page - 1) * this.pageSize;
         var endIndex = Math.min(startingIndex + this.pageSize, this.posts.length);
 
         for (var i = startingIndex; i < endIndex; i++)
             result.push(this.posts[i]);
             
         return result;
      }

}