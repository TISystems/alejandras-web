import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuieroDepilacionCeraTradicionalComponent } from './quiero-depilacion-cera-tradicional.component';

describe('QuieroDepilacionCeraTradicionalComponent', () => {
  let component: QuieroDepilacionCeraTradicionalComponent;
  let fixture: ComponentFixture<QuieroDepilacionCeraTradicionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuieroDepilacionCeraTradicionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuieroDepilacionCeraTradicionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
