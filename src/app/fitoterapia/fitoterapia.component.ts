import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FitoterapiaService } from '../services/fitoterapia/fitoterapia.service';
import { FitoterapyDialogComponent } from '../fitoterapy-dialog/fitoterapy-dialog.component';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-fitoterapia',
  standalone: true,
  imports: [CommonModule, FitoterapyDialogComponent],
  templateUrl: './fitoterapia.component.html',
  styleUrls: ['./fitoterapia.component.scss']
})
export class FitoterapiaComponent {
  collection: string = 'fitoterapia';
  description: string = 'aplicacions de les plantes medicinals';
  constructor(private fitoterapiaService: FitoterapiaService, public dialog: MatDialog) { }

  createFitoterapyElement() {
    this.fitoterapiaService.createFitotherapyCollection('fitoterapia');
  }

  openDialog() {
    const dialogRef = this.dialog.open(FitoterapyDialogComponent, {
      data: {collection: this.collection, description: this.description},
    });
  }

}
