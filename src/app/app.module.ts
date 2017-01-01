import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { PostsService } from './posts.service';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { AuthComponent } from './auth/auth.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    AuthComponent,
    HomeComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MaterialModule.forRoot()
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
