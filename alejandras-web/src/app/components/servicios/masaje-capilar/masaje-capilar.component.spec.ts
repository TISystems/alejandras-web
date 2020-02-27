import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasajeCapilarComponent } from './masaje-capilar.component';

describe('MasajeCapilarComponent', () => {
  let component: MasajeCapilarComponent;
  let fixture: ComponentFixture<MasajeCapilarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasajeCapilarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasajeCapilarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
