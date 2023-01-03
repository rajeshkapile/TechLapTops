import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path:'aboutUs',component:AboutUsComponent},
  {path:'home',component:HomeComponent},
  {path:'service',component:ServicesComponent},
  {path:'logIn',component:LoginComponent},
  {path:'register',component:RegistrationComponent},

  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
