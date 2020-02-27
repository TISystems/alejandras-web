import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuieroMasajeCapilarComponent } from './quiero-masaje-capilar.component';

describe('QuieroMasajeCapilarComponent', () => {
  let component: QuieroMasajeCapilarComponent;
  let fixture: ComponentFixture<QuieroMasajeCapilarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuieroMasajeCapilarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuieroMasajeCapilarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
