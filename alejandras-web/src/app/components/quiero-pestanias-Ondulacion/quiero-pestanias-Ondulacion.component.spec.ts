import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuieroPestaniasOndulacionComponent } from './quiero-pestanias-Ondulacion.component';

describe('QuieroPestaniasComponent', () => {
  let component: QuieroPestaniasOndulacionComponent;
  let fixture: ComponentFixture<QuieroPestaniasOndulacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuieroPestaniasOndulacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuieroPestaniasOndulacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
