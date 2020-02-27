import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuieroBotoxComponent } from './quiero-botox.component';

describe('QuieroBotoxComponent', () => {
  let component: QuieroBotoxComponent;
  let fixture: ComponentFixture<QuieroBotoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuieroBotoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuieroBotoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
