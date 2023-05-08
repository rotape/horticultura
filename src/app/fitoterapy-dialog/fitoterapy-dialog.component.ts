import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ModalComponent } from "../components/modal/modal.component";
import { FormControl, FormBuilder, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
@Component({
    selector: 'app-fitoterapy-dialog',
    standalone: true,
    providers: [],
    templateUrl: './fitoterapy-dialog.component.html',
    styleUrls: ['./fitoterapy-dialog.component.scss'],
    imports: [CommonModule, ModalComponent, ReactiveFormsModule]
})
export class FitoterapyDialogComponent {
  bodyText = 'This text can be updated in modal 1';
  fitoterapyForm = this.fb.group({
    systemName: ['', Validators.required],
    part:['', Validators.required],
    plants: this.fb.array([
      this.fb.control('')
    ])
  })

  get plants() {
    return this.fitoterapyForm.get('plants') as FormArray;
  }

  constructor(private fb: FormBuilder
    
  ) { }

  addPlant() {
    this.plants.push(this.fb.control(''));
  }
}
