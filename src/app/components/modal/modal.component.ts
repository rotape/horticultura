import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-modal',
    standalone: true,
    imports: [CommonModule],
    providers: [],
    templateUrl: 'modal.component.html',
    styleUrls: ['./modal.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit, OnDestroy {
    constructor() {}

    @Input() title: string = '';
    @Input() body: string = '';
    @Output() closeMeEvent = new EventEmitter();
    @Output() confirmEvent = new EventEmitter();
    ngOnInit(): void {
      console.log('Modal init');
    }
  
    closeMe() {
      this.closeMeEvent.emit();
    }
    confirm() {
      this.confirmEvent.emit();
    } 
  
   ngOnDestroy(): void {
      console.log(' Modal destroyed');
    }
  
}