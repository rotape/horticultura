import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../models/dialogData';
import { ModalService } from '../services/modal/modal.service';
import { ModalComponent } from "../components/modal/modal.component";
@Component({
    selector: 'app-fitoterapy-dialog',
    standalone: true,
    providers: [],
    templateUrl: './fitoterapy-dialog.component.html',
    styleUrls: ['./fitoterapy-dialog.component.scss'],
    imports: [CommonModule, ModalComponent]
})
export class FitoterapyDialogComponent {
  bodyText = 'This text can be updated in modal 1';
  constructor(
    
  ) { }
}
