import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionHeroHomeComponent } from './section-hero-home.component';

describe('SectionHeroHomeComponent', () => {
  let component: SectionHeroHomeComponent;
  let fixture: ComponentFixture<SectionHeroHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionHeroHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionHeroHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
