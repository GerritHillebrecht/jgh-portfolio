import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SplitImageContentComponent } from './split-image-content.component';

describe('SplitImageContentComponent', () => {
  let component: SplitImageContentComponent;
  let fixture: ComponentFixture<SplitImageContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SplitImageContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SplitImageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
