import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CejasComponent } from './cejas.component';

describe('CejasComponent', () => {
  let component: CejasComponent;
  let fixture: ComponentFixture<CejasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CejasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CejasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
