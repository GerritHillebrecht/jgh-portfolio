import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainNabvarComponent } from './main-nabvar.component';

describe('MainNabvarComponent', () => {
  let component: MainNabvarComponent;
  let fixture: ComponentFixture<MainNabvarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainNabvarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MainNabvarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
