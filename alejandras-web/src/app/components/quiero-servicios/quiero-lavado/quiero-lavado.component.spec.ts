import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuieroLavadoComponent } from './quiero-lavado.component';

describe('QuieroLavadoComponent', () => {
  let component: QuieroLavadoComponent;
  let fixture: ComponentFixture<QuieroLavadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuieroLavadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuieroLavadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
