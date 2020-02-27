import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlisadoComponent } from './alisado.component';

describe('AlisadoComponent', () => {
  let component: AlisadoComponent;
  let fixture: ComponentFixture<AlisadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlisadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlisadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
