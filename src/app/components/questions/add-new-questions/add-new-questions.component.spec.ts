import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddNewQuestionsComponent} from './add-new-questions.component';

describe('AddNewQuestionsComponent', () => {
  let component: AddNewQuestionsComponent;
  let fixture: ComponentFixture<AddNewQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
