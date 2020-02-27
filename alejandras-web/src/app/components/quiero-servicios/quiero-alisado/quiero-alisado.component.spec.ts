import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuieroAlisadoComponent } from './quiero-alisado.component';

describe('QuieroAlisadoComponent', () => {
  let component: QuieroAlisadoComponent;
  let fixture: ComponentFixture<QuieroAlisadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuieroAlisadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuieroAlisadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
