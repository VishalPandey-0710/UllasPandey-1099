import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurgicalEquipmentRoutingModule } from './surgical-equipment-routing.module';
import { SurgicalEquipmentComponent } from './surgical-equipment.component';


@NgModule({
  declarations: [
    SurgicalEquipmentComponent
  ],
  imports: [
    CommonModule,
    SurgicalEquipmentRoutingModule
  ]
})
export class SurgicalEquipmentModule { }
