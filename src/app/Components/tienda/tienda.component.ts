import { Component, OnInit } from '@angular/core';
import { StoreConectionService } from 'src/app/Services/store-conection.service';
import { AuthService } from 'src/app/Services/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  allUsers: any;
  currentFilter: any;
  constructor(
    public storeConectionService: StoreConectionService,
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.getAllItems()
  }
  async getAllItems() {
    this.allUsers = await this.storeConectionService.getItemFromDB();
    this.currentFilter = [];
    for (let item of this.allUsers) {
      this.currentFilter.push(item)
    }
    return this.allUsers
  }

  isPet(element: any) {
    return (element.isPet == true);
  }
  isAccessory(element: any) {
    return (element.isPet != true);
  }

  getItems(filter: String) {
    if (filter == 'pets') {
      this.currentFilter = []
      for (let item of this.allUsers.filter(this.isPet)) {
        this.currentFilter.push(item)
      }
    } else {
      this.currentFilter = [];
      for (let item of this.allUsers.filter(this.isAccessory)) {
        this.currentFilter.push(item)
      }
    }
  }

  async purchaseItem(item:any){
    this.storeConectionService.substractItem(item);
    await this.storeConectionService.db.collection('ttimShopDB').doc(item.uid).update(item);
    if (item.quantity == 0){
      await this.storeConectionService.db.collection('ttimShopDB').doc(item.uid).delete();
      this.router.navigate(["/tienda"])
    }
  }

}
