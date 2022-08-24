import { Component, OnInit } from '@angular/core';
import { StoreConectionService } from 'src/app/Services/store-conection.service';
@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  allUsers: any;
  currentFilter: any;
  constructor(
    public storeConectionService: StoreConectionService
  ) { }

  ngOnInit(): void {
    this.getUsers()
  }
  async getUsers() {
    this.allUsers = await this.storeConectionService.getAllItems();
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
}
