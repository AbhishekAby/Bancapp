import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { BancappComponent } from './components/bancapp/bancapp.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to the login page if the path is empty
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UserTableComponent },
  { path: 'posts', component: BancappComponent },
  { path: '**', redirectTo: '/login' }, // Redirect to the login page for any other unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
