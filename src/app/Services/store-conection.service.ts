import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class StoreConectionService {
  constructor(
    private db: AngularFirestore
  ) { }
  getAllItems() {
    return new Promise<any>((resolve) => {
      this.db.collection('ttimShopDB').valueChanges({ idField: 'id' }).subscribe(users => resolve(users));
    })
  }

}