import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerCoursComponent } from './lister-cours.component';

describe('ListerCoursComponent', () => {
  let component: ListerCoursComponent;
  let fixture: ComponentFixture<ListerCoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListerCoursComponent]
    });
    fixture = TestBed.createComponent(ListerCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
