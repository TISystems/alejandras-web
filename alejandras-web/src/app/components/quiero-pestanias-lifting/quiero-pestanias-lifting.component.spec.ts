import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuieroPestaniasLiftingComponent } from './quiero-pestanias-lifting.component';

describe('QuieroPestaniasLiftingComponent', () => {
  let component: QuieroPestaniasLiftingComponent;
  let fixture: ComponentFixture<QuieroPestaniasLiftingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuieroPestaniasLiftingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuieroPestaniasLiftingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
