import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { AuthGuardService as AGS } from "./_Services/auth-guard.service";


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-user', component: UserAddComponent,canActivate : [AGS] },
  { path: 'list-user', component: UserListComponent,canActivate : [AGS] },
  { path: 'edit-user', component: UserDetailComponent,canActivate : [AGS] },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
