import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuieroColorComponent } from './quiero-color.component';

describe('QuieroColorComponent', () => {
  let component: QuieroColorComponent;
  let fixture: ComponentFixture<QuieroColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuieroColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuieroColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
