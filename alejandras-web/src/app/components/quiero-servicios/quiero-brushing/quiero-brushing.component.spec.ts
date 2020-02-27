import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuieroBrushingComponent } from './quiero-brushing.component';

describe('QuieroBrushingComponent', () => {
  let component: QuieroBrushingComponent;
  let fixture: ComponentFixture<QuieroBrushingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuieroBrushingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuieroBrushingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
