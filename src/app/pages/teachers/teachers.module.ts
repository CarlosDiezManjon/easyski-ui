import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from 'src/app/layout/header/header.module';
import { MaterialModule } from 'src/app/material.module';

import { TeachersPageRoutingModule } from './teachers-routing.module';
import { TeachersPage } from './teachers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeachersPageRoutingModule,
    HeaderModule,
    MaterialModule
  ],
  declarations: [
    TeachersPage]
})
export class TeachersPageModule { }
