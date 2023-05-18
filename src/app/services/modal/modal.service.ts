import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { ModalOptions } from 'src/app/models/modal-options.type';


@Injectable({ providedIn: 'root' })
export class ModalService {
    private componentRef!: ComponentRef<any>;
    private componentSubscriber = new Subject<string>();

    constructor() {}

    openModal(entry: ViewContainerRef, {component, title, body}: ModalOptions = {}) {
      this.componentRef = entry.createComponent(ModalComponent);
      this.componentRef.instance.title = title;
      this.componentRef.instance.body = body;
      this.componentRef.instance.componentItem = component;
    
      this.componentRef.instance.closeMeEvent.subscribe(() => this.closeModal());
      this.componentRef.instance.confirmEvent.subscribe(() => this.confirm());
    
      return this.componentSubscriber.asObservable();
    }
  closeModal() {
    this.componentSubscriber.complete();
    this.componentRef.destroy();
  }

  confirm() {
    this.componentSubscriber.next('confirm');
    this.closeModal();
  }
}