import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TeacherThemesComponent} from './teacher-themes.component';

describe('TeacherThemesComponent', () => {
  let component: TeacherThemesComponent;
  let fixture: ComponentFixture<TeacherThemesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherThemesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherThemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
