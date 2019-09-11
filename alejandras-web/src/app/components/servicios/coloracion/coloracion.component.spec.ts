import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoracionComponent } from './coloracion.component';

describe('ColoracionComponent', () => {
  let component: ColoracionComponent;
  let fixture: ComponentFixture<ColoracionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColoracionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColoracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
