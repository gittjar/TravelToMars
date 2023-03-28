import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from '../services/localstorage.service';


@Component({
  selector: 'app-orderform',
  templateUrl: './orderform.component.html',
  styleUrls: ['./orderform.component.css']
})
export class OrderformComponent implements OnInit {

  constructor (private storage : LocalstorageService){}

    // list ja task
    packinglist: any = []
    equipment: string = "";

  ngOnInit(): void {
    this.GetAll();
   // this.SeedData();
  }

  // Object data models
  person = { name: '', country: ''};
  storageName: string | undefined;
  storageObject: Object = {};

    // Local storage settings using Object

    setStorage() {
      this.storage.setItem('name', this.person.name);
      this.storage.setItem('person', {
        name: this.person.name,
        country: this.person.country
      });
      alert('Set storage variable and object successfull');
    }
  
    getStorage() {
      this.storageName = this.storage.getItem('name');
      this.storageObject = this.storage.getItem('person');
    }
  
    removeItemStorage(key: string) {
      this.storage.removeItem(key);
    }
  
    clearAllStorage() {
      this.storage.clear();
      this.storageName = '';
      this.storageObject = {};
    }

    // LIST OF PACKING MATERIALS Using Array

    Add() {
    let obj = {
      EquipmentName: this.equipment,
      IsPacked: false
    };
    this.packinglist.push(obj);
    this.Save();
    this.equipment = '';
  }
// Test data to array for testing --> add also to ngonit
/*
  SeedData() {
    let obj = {
      EquipmentName: "Boots",
      IsPacked: false
    };
    this.packinglist.push(obj);
    this.Save();
  }
  */

  ChangeStatus(index: number, currentValue: boolean) {
    if (this.packinglist.length > index) {
      let obj = this.packinglist[index];
      if (obj != null && typeof obj != "undefined") {
        obj.IsPacked = !currentValue;
        this.packinglist[index] = obj;
        this.Save();
      }
    }
  }

  Delete(index: number) {
    if (this.packinglist.length > index) {
      this.packinglist.splice(index, 1);
      this.Save();
    }
  }

  DeleteAll() {
    this.packinglist = [];
    this.Save();
  }

  Save() {
    localStorage.setItem("packinglist", JSON.stringify(this.packinglist));
  }

  GetAll() {
    let value = localStorage.getItem("packinglist");
    if (value != '' && value != null && typeof value != "undefined") {
      this.packinglist = JSON.parse(value!);
    }
  }


}
