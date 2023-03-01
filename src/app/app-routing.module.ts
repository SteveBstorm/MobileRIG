import { PokeResolver } from './service/poke.resolver';
import { AuthGuard } from './guards/auth.guard';
import { TotoComponent } from './components/toto/toto.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : 'login', component : LoginComponent},
  {path : 'home', component : HomeComponent},
  {path : 'toto', /*canActivate : [AuthGuard],*/ resolve : {monObjet : PokeResolver}, component : TotoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
