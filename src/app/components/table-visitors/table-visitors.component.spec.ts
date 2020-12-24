import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVisitorsComponent } from './table-visitors.component';

describe('TableVisitorsComponent', () => {
  let component: TableVisitorsComponent;
  let fixture: ComponentFixture<TableVisitorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableVisitorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableVisitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
