import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuieroDestacadosComponent } from './quiero-destacados.component';

describe('QuieroDestacadosComponent', () => {
  let component: QuieroDestacadosComponent;
  let fixture: ComponentFixture<QuieroDestacadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuieroDestacadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuieroDestacadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
