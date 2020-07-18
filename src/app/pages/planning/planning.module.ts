import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/layout/header/header.component';
import { MaterialModule } from 'src/app/material.module';

import { HeaderModule } from './../../layout/header/header.module';
import { PlanningPageRoutingModule } from './planning-routing.module';
import { PlanningPage } from './planning.page';
import { ModalClaseComponent } from 'src/app/components/modal-clase/modal-clase.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanningPageRoutingModule,
    HeaderModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [PlanningPage, ModalClaseComponent],
  entryComponents: [
    ModalClaseComponent
  ]
})
export class PlanningPageModule { }
