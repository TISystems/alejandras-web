import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuieroMicropigmentacionComponent } from './quiero-micropigmentacion.component';

describe('QuieroMicropigmentacionComponent', () => {
  let component: QuieroMicropigmentacionComponent;
  let fixture: ComponentFixture<QuieroMicropigmentacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuieroMicropigmentacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuieroMicropigmentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
