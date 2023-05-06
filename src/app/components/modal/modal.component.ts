import { CommonModule } from '@angular/common';
import { ViewEncapsulation, OnInit, OnDestroy, Input, Output, EventEmitter, ViewChild, ViewContainerRef, Component, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-modal',
    standalone: true,
    imports: [CommonModule],
    providers: [],
    templateUrl: 'modal.component.html',
    styleUrls: ['./modal.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements  AfterViewInit {
    constructor() { }
    @ViewChild('component', { read: ViewContainerRef }) componentRef?;
    @Input() title: string = '';
    @Input() body: string = '';
    @Input() componentItem: Component | undefined;
    @Output() closeMeEvent = new EventEmitter();
    @Output() confirmEvent = new EventEmitter();

    ngAfterViewInit(): void {
        this.componentRef?.createComponent(this.componentItem)
    }

    closeMe() {
        this.closeMeEvent.emit();
    }
    confirm() {
        this.confirmEvent.emit();
    }

}