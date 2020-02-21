import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfDevComponent } from './self-dev.component';

describe('SelfDevComponent', () => {
  let component: SelfDevComponent;
  let fixture: ComponentFixture<SelfDevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfDevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
