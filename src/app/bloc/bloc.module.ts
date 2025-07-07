import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlocRoutingModule } from './bloc-routing.module';
import { BlocDocComponent } from './bloc-doc/bloc-doc.component';
import { BlocListComponent } from './bloc-list/bloc-list.component';
import { BlocAddComponent } from './bloc-add/bloc-add.component';
import { BlocUpdateComponent } from './bloc-update/bloc-update.component';
import { BlocAffectComponent } from './bloc-affect/bloc-affect.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BlocDocComponent,
    BlocListComponent,
    BlocAddComponent,
    BlocUpdateComponent,
    BlocAffectComponent
  ],
  imports: [
    CommonModule,
    BlocRoutingModule,
    FormsModule
  ]
})
export class BlocModule { }
