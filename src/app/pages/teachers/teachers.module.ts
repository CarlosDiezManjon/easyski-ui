import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeachersPageRoutingModule } from './teachers-routing.module';

import { TeachersPage } from './teachers.page';
import { HeaderComponent } from 'src/app/layout/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeachersPageRoutingModule
  ],
  declarations: [TeachersPage, HeaderComponent]
})
export class TeachersPageModule {}
