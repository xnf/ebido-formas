import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileReactiveComponent } from './profile-reactive.component';

describe('ProfileReactiveComponent', () => {
  let component: ProfileReactiveComponent;
  let fixture: ComponentFixture<ProfileReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
