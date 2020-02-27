import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuieroTratamientoFacialComponent } from './quiero-tratamiento-facial.component';

describe('QuieroTratamientoFacialComponent', () => {
  let component: QuieroTratamientoFacialComponent;
  let fixture: ComponentFixture<QuieroTratamientoFacialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuieroTratamientoFacialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuieroTratamientoFacialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
