import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PharmacistRoutingModule } from './pharmacist-routing.module';
import { PharmacistComponent } from './pharmacist.component';


@NgModule({
  declarations: [
    PharmacistComponent
  ],
  imports: [
    CommonModule,
    PharmacistRoutingModule
  ]
})
export class PharmacistModule { }
