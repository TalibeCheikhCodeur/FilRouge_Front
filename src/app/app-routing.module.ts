import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutCoursComponent } from './menu/ajout-cours/ajout-cours.component';
import { MenuComponent } from './menu/menu.component';
import { InscriptionComponent } from './menu/inscription/inscription.component';
import { ListerCoursComponent } from './menu/lister-cours/lister-cours.component';
import { SessionComponentComponent } from './menu/session-component/session-component.component';
import { ListerSessionComponent } from './menu/lister-session/lister-session.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  
  {
    path:'',
    component:LoginComponent
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: 'menu/cours',
    component: AjoutCoursComponent
  },
  {
    path: 'menu/inscription',
    component: InscriptionComponent
  },
  {
    path: 'menu/listCours',
    component: ListerCoursComponent
  },
  {
    path: 'menu/listCours/ajoutSession',
    component: SessionComponentComponent
  },
  {
    path:'menu/listerSession',
    component:ListerSessionComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
