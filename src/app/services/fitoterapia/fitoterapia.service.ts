import { Injectable } from '@angular/core';
import { FirestoreService } from '../firestore/firestore.service';

@Injectable({
  providedIn: 'root'
})
export class FitoterapiaService {

  constructor(private firestoreService: FirestoreService) { }

  public createFitotherapyCollection(collection: string) {
    this.firestoreService.addItem(collection);
  }
}
