import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuieroServicioComponent } from './quiero-servicio.component';

describe('QuieroServicioComponent', () => {
  let component: QuieroServicioComponent;
  let fixture: ComponentFixture<QuieroServicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuieroServicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuieroServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
