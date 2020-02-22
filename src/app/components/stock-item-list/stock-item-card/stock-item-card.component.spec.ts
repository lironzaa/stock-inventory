import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItemCardComponent } from './stock-item-card.component';

describe('StockItemCardComponent', () => {
  let component: StockItemCardComponent;
  let fixture: ComponentFixture<StockItemCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockItemCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
