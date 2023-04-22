import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any>;
  constructor(private afs: AngularFirestore) {
    this.itemsCollection = this.afs.collection('items');
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map((a: { payload: { doc: { data: () => any; id: any; }; }; }) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      })
    )
  }

  addItem(item: any) {
    this.itemsCollection.add(item);

  }

  deleteItem(item: any) {
    this.itemsCollection.doc(item.id).delete();
  }

  updateItem(item: any) {
    this.itemsCollection.doc(item.id).update(item);
  }
}
