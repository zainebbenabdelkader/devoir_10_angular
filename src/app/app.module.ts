import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LunettesComponent } from './lunettes/lunettes.component';  // Updated component name
import { AddLunetteComponent } from './add-lunette/add-lunette.component';  // Updated component name
import { UpdateLunetteComponent } from './update-lunette/update-lunette.component';  // Updated component name
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RechercheParStyleComponent } from './recherche-par-style/recherche-par-style.component';  // Updated component name
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { LoginComponent } from './login/login.component';
import { ListeStylesComponent } from './liste-styles/liste-styles.component';  // Updated component name
import { UpdateStyleComponent } from './update-style/update-style.component';  // Updated component name

// If you have services, add them here if necessary
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LunettesComponent,  // Updated component name
    AddLunetteComponent,  // Updated component name
    UpdateLunetteComponent,  // Updated component name
    RechercheParStyleComponent,  // Updated component name
    RechercheParNomComponent,
    LoginComponent,
    ListeStylesComponent,  // Updated component name
    UpdateStyleComponent  // Updated component name
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [AuthService], // Add services if required
  bootstrap: [AppComponent]
})
export class AppModule { }
