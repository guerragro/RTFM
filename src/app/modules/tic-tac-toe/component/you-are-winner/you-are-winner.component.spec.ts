import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YouAreWinnerComponent } from './you-are-winner.component';

describe('YouAreWinnerComponent', () => {
  let component: YouAreWinnerComponent;
  let fixture: ComponentFixture<YouAreWinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouAreWinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouAreWinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
