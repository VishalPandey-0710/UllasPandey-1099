import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminComponent } from './admin/admin.component';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientModule } from './client/client.module';
import { ClinicModule } from './clinic/clinic.module';
import { PharmacistModule } from './pharmacist/pharmacist.module';
import { SurgicalEquipmentComponent } from './surgical-equipment/surgical-equipment.component';
import { SurgicalEquipmentModule } from './surgical-equipment/surgical-equipment.module';
import { HospitalEquipmentComponent } from './hospital-equipment/hospital-equipment.component';
import { HospitalEquipmentModule } from './hospital-equipment/hospital-equipment.module';
import { LabouratoryRoutingModule } from './labouratory/labouratory-routing.module';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    ClinicModule,
    ClientModule,
    PharmacistModule,
    SurgicalEquipmentModule,
    HospitalEquipmentModule,
    LabouratoryRoutingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
