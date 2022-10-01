import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResaleSuccessComponent } from './resale-success.component';

describe('ResaleSuccessComponent', () => {
  let component: ResaleSuccessComponent;
  let fixture: ComponentFixture<ResaleSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResaleSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResaleSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
