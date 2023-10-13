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

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AjoutCoursComponent,
    InscriptionComponent,
    ListerCoursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
