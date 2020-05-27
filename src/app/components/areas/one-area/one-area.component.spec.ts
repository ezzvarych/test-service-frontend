import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OneAreaComponent} from './one-area.component';

describe('OneAreaComponent', () => {
  let component: OneAreaComponent;
  let fixture: ComponentFixture<OneAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
