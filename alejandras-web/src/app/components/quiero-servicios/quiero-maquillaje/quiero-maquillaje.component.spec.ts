import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuieroMaquillajeComponent } from './quiero-maquillaje.component';

describe('QuieroMaquillajeComponent', () => {
  let component: QuieroMaquillajeComponent;
  let fixture: ComponentFixture<QuieroMaquillajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuieroMaquillajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuieroMaquillajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
