import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoeComponent } from './poe.component';

describe('PoeComponent', () => {
  let component: PoeComponent;
  let fixture: ComponentFixture<PoeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
