

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'auth', pathMatch:'full'},
  {path:'auth', loadChildren:()=> import('./auth/auth.module').then(a=>a.AuthModule)},
  { path: 'home', loadChildren: () => import('./home/home.module').then(a => a.HomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
