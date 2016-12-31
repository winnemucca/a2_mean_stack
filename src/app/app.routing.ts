import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { PostsComponent } from './posts/posts.component';

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/posts', pathMatch: 'full'},
    {path: 'auth', component: AuthComponent},
    {path: 'posts', component: PostsComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);

