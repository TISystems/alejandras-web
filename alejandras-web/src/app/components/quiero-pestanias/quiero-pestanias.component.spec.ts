import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuieroPestaniasComponent } from './quiero-pestanias.component';

describe('QuieroPestaniasComponent', () => {
  let component: QuieroPestaniasComponent;
  let fixture: ComponentFixture<QuieroPestaniasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuieroPestaniasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuieroPestaniasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
