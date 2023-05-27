import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PharmacistComponent } from './pharmacist.component';

const routes: Routes = [
  {
    path: 'pharmacist',
    component: PharmacistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PharmacistRoutingModule { }
