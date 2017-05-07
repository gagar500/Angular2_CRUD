import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavBarComponent} from './navbar.component';
import {routing} from './app.routing'; 
import {HomeComponent} from './home.component';
import {UsersComponent} from './Users/users.component';
import {PostsComponent} from './Posts/posts.component';
import {PostService} from './post.service';

@NgModule({
  declarations: [
    AppComponent,NavBarComponent,HomeComponent,UsersComponent,PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
