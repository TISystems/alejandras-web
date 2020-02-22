import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuieroCejasPerfiladoComponent } from './quiero-cejas-perfilado.component';

describe('QuieroCejasPerfiladoComponent', () => {
  let component: QuieroCejasPerfiladoComponent;
  let fixture: ComponentFixture<QuieroCejasPerfiladoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuieroCejasPerfiladoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuieroCejasPerfiladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
