import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSocialNetworksComponent } from './nav-social-networks.component';

describe('NavSocialNetworksComponent', () => {
  let component: NavSocialNetworksComponent;
  let fixture: ComponentFixture<NavSocialNetworksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavSocialNetworksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavSocialNetworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
