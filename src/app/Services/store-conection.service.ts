import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class StoreConectionService {
  constructor(
    public db: AngularFirestore,

  ) { }
  getItemFromDB() {
    return new Promise<any>((resolve) => {
      this.db.collection('ttimShopDB').valueChanges({ idField: 'id' }).subscribe(users => resolve(users));
    })
  }

  substractItem(item: any){
    item.quantity -= 1;
  }

}