import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LabouratoryComponent } from './labouratory.component';

const routes: Routes = [
  {
    path: 'labouratory',
    component: LabouratoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LabouratoryRoutingModule { }
