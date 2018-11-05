import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingunitComponent } from './bookingunit.component';

describe('BookingunitComponent', () => {
  let component: BookingunitComponent;
  let fixture: ComponentFixture<BookingunitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingunitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
