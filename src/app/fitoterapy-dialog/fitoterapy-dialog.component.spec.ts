import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitoterapyDialogComponent } from './fitoterapy-dialog.component';

describe('FitoterapyDialogComponent', () => {
  let component: FitoterapyDialogComponent;
  let fixture: ComponentFixture<FitoterapyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FitoterapyDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitoterapyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
