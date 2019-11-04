import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcutorComponent } from './calcutor.component';

describe('CalcutorComponent', () => {
  let component: CalcutorComponent;
  let fixture: ComponentFixture<CalcutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
