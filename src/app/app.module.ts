import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { AjoutCoursComponent } from './menu/ajout-cours/ajout-cours.component';
import { InscriptionComponent } from './menu/inscription/inscription.component';
import { ListerCoursComponent } from './menu/lister-cours/lister-cours.component';
import { SessionComponentComponent } from './menu/session-component/session-component.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ListerSessionComponent } from './menu/lister-session/lister-session.component'
import { NgSelectModule } from '@ng-select/ng-select';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AjoutCoursComponent,
    InscriptionComponent,
    ListerCoursComponent,
    SessionComponentComponent,
    ListerSessionComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
