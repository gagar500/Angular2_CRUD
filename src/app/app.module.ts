import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavBarComponent} from './navbar.component';
import {routing} from './app.routing'; 
import {HomeComponent} from './home.component';
import {UsersComponent} from './Users/users.component';
import {PostsComponent} from './Posts/posts.component';
import {PostService} from './post.service';
import {NewUserComponent} from './Users/new-user.component';
import {PreventUnsavedChangesGuard} from './prevent-unsave-guard.service';
import {NotFoundComponent} from './not-found.component';

@NgModule({
  declarations: [
    AppComponent,NavBarComponent,HomeComponent,UsersComponent,PostsComponent,NewUserComponent,NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [PostService,PreventUnsavedChangesGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
