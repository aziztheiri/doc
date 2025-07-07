import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlocDocComponent } from './bloc-doc/bloc-doc.component';
import { BlocListComponent } from './bloc-list/bloc-list.component';
import { BlocAddComponent } from './bloc-add/bloc-add.component';
import { BlocUpdateComponent } from './bloc-update/bloc-update.component';
import { BlocAffectComponent } from './bloc-affect/bloc-affect.component';
import { LayoutComponent } from '../layout/layout.component';
import { GuideComponent } from '../guide/guide.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: BlocDocComponent },
      { path: 'list', component: BlocListComponent },
      { path: 'add', component: BlocAddComponent },
      { path: 'update', component: BlocUpdateComponent },
      { path: 'affect', component: BlocAffectComponent }
      
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlocRoutingModule { }
