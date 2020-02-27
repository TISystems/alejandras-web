import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuieroPeinadoComponent } from './quiero-peinado.component';

describe('QuieroPeinadoComponent', () => {
  let component: QuieroPeinadoComponent;
  let fixture: ComponentFixture<QuieroPeinadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuieroPeinadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuieroPeinadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
