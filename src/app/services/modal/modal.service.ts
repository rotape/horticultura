import { ModalComponent } from 'src/app/components/modal/modal.component';
import {ComponentRef, Injectable, TemplateRef, ViewContainerRef} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import { ComponentType } from '@angular/cdk/portal';

@Injectable({ providedIn: 'root' })
export class ModalService {
    private componentRef!: ComponentRef<any>;
    private componentSubscriber!: Subject<string>;
    constructor() {}

  openModal(entry: ViewContainerRef,component?: ComponentType<any>, modalTitle?: string, modalBody?: string ) {

    this.componentRef = entry.createComponent(ModalComponent);
    this.componentRef.instance.title = modalTitle;
    this.componentRef.instance.body = modalBody;
    this.componentRef.instance.componentItem = component;

    this.componentRef.instance.closeMeEvent.subscribe(() => this.closeModal());
    this.componentRef.instance.confirmEvent.subscribe(() => this.confirm());
    this.componentSubscriber = new Subject<string>();
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