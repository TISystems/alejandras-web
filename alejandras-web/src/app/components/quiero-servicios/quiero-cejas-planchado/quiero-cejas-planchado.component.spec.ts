import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuieroCejasPlanchadoComponent } from './quiero-cejas-planchado.component';

describe('QuieroCejasPlanchadoComponent', () => {
  let component: QuieroCejasPlanchadoComponent;
  let fixture: ComponentFixture<QuieroCejasPlanchadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuieroCejasPlanchadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuieroCejasPlanchadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
