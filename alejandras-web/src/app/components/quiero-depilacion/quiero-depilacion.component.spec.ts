import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuieroDepilacionComponent } from './quiero-depilacion.component';

describe('QuieroDepilacionComponent', () => {
  let component: QuieroDepilacionComponent;
  let fixture: ComponentFixture<QuieroDepilacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuieroDepilacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuieroDepilacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
