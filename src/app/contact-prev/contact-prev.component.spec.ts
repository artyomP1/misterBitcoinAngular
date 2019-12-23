import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPrevComponent } from './contact-prev.component';

describe('ContactPrevComponent', () => {
  let component: ContactPrevComponent;
  let fixture: ComponentFixture<ContactPrevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactPrevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPrevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
