import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorteCabelloComponent } from './corte-cabello.component';

describe('CorteCabelloComponent', () => {
  let component: CorteCabelloComponent;
  let fixture: ComponentFixture<CorteCabelloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorteCabelloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorteCabelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
