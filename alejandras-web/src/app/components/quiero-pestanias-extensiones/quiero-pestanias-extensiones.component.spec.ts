import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuieroPestaniasExtensionesComponent } from './quiero-pestanias-extensiones.component';

describe('QuieroPestaniasExtensionesComponent', () => {
  let component: QuieroPestaniasExtensionesComponent;
  let fixture: ComponentFixture<QuieroPestaniasExtensionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuieroPestaniasExtensionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuieroPestaniasExtensionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
