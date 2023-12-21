import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReferenceDetailedComponent } from './reference-detailed.component';

describe('ReferenceDetailedComponent', () => {
  let component: ReferenceDetailedComponent;
  let fixture: ComponentFixture<ReferenceDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferenceDetailedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReferenceDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
