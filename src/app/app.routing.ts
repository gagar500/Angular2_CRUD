import { Router, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { UsersComponent } from './Users/users.component';
import { PostsComponent } from './Posts/posts.component';
import { NewUserComponent } from './Users/new-user.component';
import {PreventUnsavedChangesGuard} from './prevent-unsave-guard.service';
import {NotFoundComponent} from './not-found.component';

export const routing = RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'Users/New', component: NewUserComponent,data:{title:'Add New User'},canDeactivate:[PreventUnsavedChangesGuard]},
    { path: 'Users/:id', component: NewUserComponent,data:{title:'Edit User'},canDeactivate:[PreventUnsavedChangesGuard]},
    { path: 'Users', component: UsersComponent },
  
    { path: 'Posts', component: PostsComponent },
    {path:'NotFound',component:NotFoundComponent},
    { path: '**', component: HomeComponent },
]);