import { Router, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { UsersComponent } from './Users/users.component';
import { PostsComponent } from './Posts/posts.component';
import { NewUserComponent } from './Users/new-user.component';

export const routing = RouterModule.forRoot([
    { path: '', component: HomeComponent },
       { path: 'Users/New', component: NewUserComponent },
    { path: 'Users', component: UsersComponent },
  
    { path: 'Posts', component: PostsComponent },
    { path: '**', component: HomeComponent },
]);