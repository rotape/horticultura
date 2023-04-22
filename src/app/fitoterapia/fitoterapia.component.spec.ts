import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitoterapiaComponent } from './fitoterapia.component';

describe('FitoterapiaComponent', () => {
  let component: FitoterapiaComponent;
  let fixture: ComponentFixture<FitoterapiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FitoterapiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitoterapiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
