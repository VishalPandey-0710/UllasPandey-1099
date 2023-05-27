import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HospitalEquipmentComponent } from './hospital-equipment.component';

const routes: Routes = [
  {
    path: 'hospital-equipment',
    component: HospitalEquipmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospitalEquipmentRoutingModule { }
