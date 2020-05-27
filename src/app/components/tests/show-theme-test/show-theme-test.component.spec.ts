import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ShowThemeTestComponent} from './show-theme-test.component';

describe('ShowThemeTestComponent', () => {
  let component: ShowThemeTestComponent;
  let fixture: ComponentFixture<ShowThemeTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowThemeTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowThemeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
