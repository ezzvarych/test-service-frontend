import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ShowAreaTestComponent} from './show-area-test.component';

describe('ShowAreaTestComponent', () => {
  let component: ShowAreaTestComponent;
  let fixture: ComponentFixture<ShowAreaTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAreaTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAreaTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
