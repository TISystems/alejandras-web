import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowbarComponent } from './browbar.component';

describe('BrowbarComponent', () => {
  let component: BrowbarComponent;
  let fixture: ComponentFixture<BrowbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
