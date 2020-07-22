import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaikapogaComponent } from './laikapoga.component';

describe('LaikapogaComponent', () => {
  let component: LaikapogaComponent;
  let fixture: ComponentFixture<LaikapogaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaikapogaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaikapogaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
