import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutCoursComponent } from './ajout-cours.component';

describe('AjoutCoursComponent', () => {
  let component: AjoutCoursComponent;
  let fixture: ComponentFixture<AjoutCoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutCoursComponent]
    });
    fixture = TestBed.createComponent(AjoutCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
