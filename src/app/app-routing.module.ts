import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'bloc', loadChildren: () => import('./bloc/bloc.module').then(m => m.BlocModule) },
  { path: '', redirectTo: 'bloc', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
