import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuieroCorteComponent } from './quiero-corte.component';

describe('QuieroCorteComponent', () => {
  let component: QuieroCorteComponent;
  let fixture: ComponentFixture<QuieroCorteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuieroCorteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuieroCorteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
