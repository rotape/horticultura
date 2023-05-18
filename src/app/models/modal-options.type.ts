import { ComponentType } from '@angular/cdk/portal';

export type ModalOptions = {
    component?: ComponentType<any>,
    title?: string,
    body?: string,
  }