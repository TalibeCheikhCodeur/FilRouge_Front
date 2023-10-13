import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutCoursComponent } from './menu/ajout-cours/ajout-cours.component';
import { MenuComponent } from './menu/menu.component';
import { InscriptionComponent } from './menu/inscription/inscription.component';
import { ListerCoursComponent } from './menu/lister-cours/lister-cours.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
  },
  {
    path: 'cours',
    component: AjoutCoursComponent
  },
  {
    path: 'inscription',
    component: InscriptionComponent
  },
  {
    path: 'listCours',
    component: ListerCoursComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
