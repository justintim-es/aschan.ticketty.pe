import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutSnackComponent } from './checkout-snack.component';

describe('CheckoutSnackComponent', () => {
  let component: CheckoutSnackComponent;
  let fixture: ComponentFixture<CheckoutSnackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutSnackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutSnackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
