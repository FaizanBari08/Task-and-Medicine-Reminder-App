import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAccountComponent } from './modules/userAccount/userAcc.component';
import { PageNotFoundComponent } from './modules/pageNotFound/pnf.component';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent, pathMatch: 'full'},
  { path: 'account', component: UserAccountComponent , pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
