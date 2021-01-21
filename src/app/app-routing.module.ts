import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
import { RestrictGuard } from './shared/guards/restrict.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'login',
     canActivate: [AuthGuard],
    loadChildren: () => import('../../src/app/domains/auth/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'dashboard',
     canActivate: [RestrictGuard],
    loadChildren: () => import('../../src/app/domains/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
