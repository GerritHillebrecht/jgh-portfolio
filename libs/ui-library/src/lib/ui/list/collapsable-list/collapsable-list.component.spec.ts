import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CollapsableListComponent } from './collapsable-list.component';

describe('CollapsableListComponent', () => {
  let component: CollapsableListComponent;
  let fixture: ComponentFixture<CollapsableListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollapsableListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CollapsableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
