import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVisitorsComponent } from './form-visitors.component';

describe('FormVisitorsComponent', () => {
  let component: FormVisitorsComponent;
  let fixture: ComponentFixture<FormVisitorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormVisitorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVisitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
