import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientoCapilarComponent } from './tratamiento-capilar.component';

describe('TratamientoCapilarComponent', () => {
  let component: TratamientoCapilarComponent;
  let fixture: ComponentFixture<TratamientoCapilarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TratamientoCapilarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TratamientoCapilarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
