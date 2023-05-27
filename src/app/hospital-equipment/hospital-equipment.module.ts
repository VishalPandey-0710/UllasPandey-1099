import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HospitalEquipmentRoutingModule } from './hospital-equipment-routing.module';
import { HospitalEquipmentComponent } from './hospital-equipment.component';


@NgModule({
  declarations: [
    HospitalEquipmentComponent
  ],
  imports: [
    CommonModule,
    HospitalEquipmentRoutingModule
  ]
})
export class HospitalEquipmentModule { }
