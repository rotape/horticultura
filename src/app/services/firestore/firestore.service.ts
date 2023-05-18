import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Item {
  id: string,
  // Define your item properties here
}

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private itemsCollection: AngularFirestoreCollection<Item>;
  items$: Observable<Item[]>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = this.afs.collection<Item>('items');
    this.items$ = this.itemsCollection.valueChanges({ idField: 'id' });
  }

  addItem(item: Item) {
    this.itemsCollection.add(item);
  }

  deleteItem(item: Item) {
    this.itemsCollection.doc(item.id).delete();
  }

  updateItem(item: Item) {
    this.itemsCollection.doc(item.id).update(item);
  }
}
