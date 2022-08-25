import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginScreenComponent } from './Components/login-screen/login-screen.component';
import { PanelComponent } from './Components/panel/panel.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { TiendaComponent } from './Components/tienda/tienda.component';
import { LoggedOutComponent } from './Components/logged-out/logged-out.component';
import { AuthGuard } from './Guard/auth.guard';
import { VerifyEmailComponent } from './Components/verify-email/verify-email.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginScreenComponent},
  { path: 'panel', component: PanelComponent, canActivate: [AuthGuard]},
  { path: 'signUp', component: SignUpComponent},
  { path: 'tienda', component: TiendaComponent}, 
  { path: 'loggedOut', component: LoggedOutComponent}, 
  { path: 'verify-email-address', component: VerifyEmailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, LoginScreenComponent, PanelComponent, SignUpComponent, TiendaComponent, LoggedOutComponent, VerifyEmailComponent]
