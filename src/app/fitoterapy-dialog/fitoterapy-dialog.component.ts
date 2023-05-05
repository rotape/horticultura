import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../models/dialogData';
@Component({
  selector: 'app-fitoterapy-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fitoterapy-dialog.component.html',
  styleUrls: ['./fitoterapy-dialog.component.scss']
})
export class FitoterapyDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<FitoterapyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
