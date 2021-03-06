import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {APP_ROUTER_PROVIDERS} from './app.routes'
import {HTTP_PROVIDERS} from '@angular/http';
import {AuthCheckService} from './services/authCheck';

bootstrap(AppComponent,[
        APP_ROUTER_PROVIDERS,HTTP_PROVIDERS,AuthCheckService
]);
