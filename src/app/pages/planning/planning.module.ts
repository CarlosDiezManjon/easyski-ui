import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanningPageRoutingModule } from './planning-routing.module';

import { PlanningPage } from './planning.page';
import { HeaderComponent } from 'src/app/layout/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanningPageRoutingModule
  ],
  declarations: [PlanningPage, HeaderComponent]
})
export class PlanningPageModule {}
