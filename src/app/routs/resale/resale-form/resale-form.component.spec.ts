import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResaleFormComponent } from './resale-form.component';

describe('ResaleFormComponent', () => {
  let component: ResaleFormComponent;
  let fixture: ComponentFixture<ResaleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResaleFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResaleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
