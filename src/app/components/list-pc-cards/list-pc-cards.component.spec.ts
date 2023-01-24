import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPcCardsComponent } from './list-pc-cards.component';

describe('ListPcCardsComponent', () => {
  let component: ListPcCardsComponent;
  let fixture: ComponentFixture<ListPcCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPcCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPcCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
