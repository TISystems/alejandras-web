import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicropigmentacionComponent } from './micropigmentacion.component';

describe('MicropigmentacionComponent', () => {
  let component: MicropigmentacionComponent;
  let fixture: ComponentFixture<MicropigmentacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicropigmentacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicropigmentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
