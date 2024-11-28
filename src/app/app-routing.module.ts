import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LunettesComponent } from './lunettes/lunettes.component';  // Renamed from TvsComponent
import { AddLunetteComponent } from './add-lunette/add-lunette.component';  // Renamed from AddTvComponent
import { UpdateLunetteComponent } from './update-lunette/update-lunette.component';  // Renamed from UpdateTvComponent
import { RechercheParStyleComponent } from './recherche-par-style/recherche-par-style.component';  // Renamed from RechercheParMarqueComponent
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LunetteGuard } from './lunette.guard';  // Renamed from TvGuard
import { ListeStylesComponent } from './liste-styles/liste-styles.component';  // Renamed from ListeMarquesComponent

const routes: Routes = [
  { path: 'lunettes', component: LunettesComponent },  // Renamed from 'tvs'
  { path: 'add-lunette', component: AddLunetteComponent, canActivate: [LunetteGuard] },  // Renamed from 'add-tv'
  { path: 'update-lunette/:id', component: UpdateLunetteComponent },  // Renamed from 'update-tv'
  { path: '', redirectTo: '/lunettes', pathMatch: 'full' },  // Default route, renamed from 'tvs'
  { path: 'rechercheParStyle', component: RechercheParStyleComponent },  // Renamed from 'rechercheParMarque'
  { path: 'rechercheParNom', component: RechercheParNomComponent },
  { path: 'login', component: LoginComponent },
  { path: 'app-forbidden', component: ForbiddenComponent },
  { path: 'liste-styles', component: ListeStylesComponent },  // Renamed from 'ListeMarques'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
