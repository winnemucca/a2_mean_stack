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

const ROUTES = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: PostsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //RouterModule.forRoot(ROUTES), // Add routes to the app
    routing,
    MaterialModule.forRoot()
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
