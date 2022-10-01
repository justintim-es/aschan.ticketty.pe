import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResaleCheckoutComponent } from './resale-checkout.component';

describe('ResaleCheckoutComponent', () => {
  let component: ResaleCheckoutComponent;
  let fixture: ComponentFixture<ResaleCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResaleCheckoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResaleCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
