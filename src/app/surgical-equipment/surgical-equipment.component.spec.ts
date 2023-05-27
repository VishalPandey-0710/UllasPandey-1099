import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurgicalEquipmentComponent } from './surgical-equipment.component';

describe('SurgicalEquipmentComponent', () => {
  let component: SurgicalEquipmentComponent;
  let fixture: ComponentFixture<SurgicalEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurgicalEquipmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurgicalEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
