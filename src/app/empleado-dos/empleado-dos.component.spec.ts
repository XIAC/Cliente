import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoDosComponent } from './empleado-dos.component';

describe('EmpleadoDosComponent', () => {
  let component: EmpleadoDosComponent;
  let fixture: ComponentFixture<EmpleadoDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadoDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
