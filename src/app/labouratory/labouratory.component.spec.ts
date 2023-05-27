import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabouratoryComponent } from './labouratory.component';

describe('LabouratoryComponent', () => {
  let component: LabouratoryComponent;
  let fixture: ComponentFixture<LabouratoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabouratoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabouratoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
