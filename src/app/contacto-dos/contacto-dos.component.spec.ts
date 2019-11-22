import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoDosComponent } from './contacto-dos.component';

describe('ContactoDosComponent', () => {
  let component: ContactoDosComponent;
  let fixture: ComponentFixture<ContactoDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactoDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
