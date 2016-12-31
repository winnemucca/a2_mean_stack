import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'auth', component: AuthComponent},
    {path: 'posts', component: PostsComponent},
    {path: 'home', component: HomeComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);

