import { provideRouter, RouterConfig }  from '@angular/router';
import {AppComponent} from './app.component';
import { LoginComponent } from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthCheckService} from './services/authCheck';

const routes: RouterConfig = [
  
  { path: '', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthCheckService]
  }

];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
