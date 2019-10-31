import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAviaComponent } from './search-avia.component';

describe('SearchTicketComponent', () => {
  let component: SearchAviaComponent;
  let fixture: ComponentFixture<SearchAviaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAviaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
