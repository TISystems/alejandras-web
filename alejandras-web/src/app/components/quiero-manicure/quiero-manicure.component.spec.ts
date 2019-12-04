import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuieroManicureComponent } from './quiero-manicure.component';

describe('QuieroManicureComponent', () => {
  let component: QuieroManicureComponent;
  let fixture: ComponentFixture<QuieroManicureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuieroManicureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuieroManicureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
