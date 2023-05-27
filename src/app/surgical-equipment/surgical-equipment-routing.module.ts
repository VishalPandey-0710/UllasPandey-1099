import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurgicalEquipmentComponent } from './surgical-equipment.component';

const routes: Routes = [
  {
    path: 'surgical-equipment',
    component: SurgicalEquipmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurgicalEquipmentRoutingModule { }
