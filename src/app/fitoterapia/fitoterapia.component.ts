import { Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FitoterapiaService } from '../services/fitoterapia/fitoterapia.service';
import { FitoterapyDialogComponent } from '../fitoterapy-dialog/fitoterapy-dialog.component';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ModalService } from '../services/modal/modal.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-fitoterapia',
  standalone: true,
  imports: [CommonModule, FitoterapyDialogComponent],
  providers: [ModalService],
  templateUrl: './fitoterapia.component.html',
  styleUrls: ['./fitoterapia.component.scss']
})
export class FitoterapiaComponent {
  @ViewChild('modal', { read: ViewContainerRef }) entry?;
  collection: string = 'fitoterapia';
  description: string = 'aplicacions de les plantes medicinals';
  // entry!: ViewContainerRef;
  sub!: Subscription;
  constructor(private fitoterapiaService: FitoterapiaService, private modalService: ModalService) { }

  createFitoterapyElement() {
    this.fitoterapiaService.createFitotherapyCollection('fitoterapia');
  }

  createModal() {
    console.log(this.entry);
    this.sub = this.modalService
      .openModal(this.entry, 'Are you sure ?', 'click confirm or close')
      .subscribe((v) => {
        console.log(v, 'HAAAA');
      });
  }
  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }

}
