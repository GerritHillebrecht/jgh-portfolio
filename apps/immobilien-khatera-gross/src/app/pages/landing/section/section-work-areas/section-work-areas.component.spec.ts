import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionWorkAreasComponent } from './section-work-areas.component';

describe('SectionWorkAreasComponent', () => {
  let component: SectionWorkAreasComponent;
  let fixture: ComponentFixture<SectionWorkAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionWorkAreasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionWorkAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
