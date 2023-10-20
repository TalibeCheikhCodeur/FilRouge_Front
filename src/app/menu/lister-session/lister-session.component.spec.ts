import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerSessionComponent } from './lister-session.component';

describe('ListerSessionComponent', () => {
  let component: ListerSessionComponent;
  let fixture: ComponentFixture<ListerSessionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListerSessionComponent]
    });
    fixture = TestBed.createComponent(ListerSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
