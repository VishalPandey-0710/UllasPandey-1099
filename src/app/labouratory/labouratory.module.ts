import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabouratoryRoutingModule } from './labouratory-routing.module';
import { LabouratoryComponent } from './labouratory.component';


@NgModule({
  declarations: [
    LabouratoryComponent
  ],
  imports: [
    CommonModule,
    LabouratoryRoutingModule
  ]
})
export class LabouratoryModule { }
