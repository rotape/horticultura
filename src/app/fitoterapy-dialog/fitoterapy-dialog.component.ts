import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
