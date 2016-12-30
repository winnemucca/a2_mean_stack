import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/posts', pathMatch: 'full'},
    {path: 'auth', component: AuthComponent}
]