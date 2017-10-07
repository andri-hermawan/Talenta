import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { routing } from './app.routing';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
//service
import { RestService } from "./rest.service";
import { LoopbackService } from "./shared/loopback.service"
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TooltipModule,
    ModalModule.forRoot(),
    routing
  ],
  providers: [LoopbackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
