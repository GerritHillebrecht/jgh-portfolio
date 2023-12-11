import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StackingCardsComponent } from './stacking-cards.component';

describe('StackingCardsComponent', () => {
  let component: StackingCardsComponent;
  let fixture: ComponentFixture<StackingCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StackingCardsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StackingCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
