import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuieroTratamientoCorporalComponent } from './quiero-tratamiento-corporal.component';

describe('QuieroTratamientoCorporalComponent', () => {
  let component: QuieroTratamientoCorporalComponent;
  let fixture: ComponentFixture<QuieroTratamientoCorporalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuieroTratamientoCorporalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuieroTratamientoCorporalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
