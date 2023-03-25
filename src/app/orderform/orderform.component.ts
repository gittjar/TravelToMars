import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from '../services/localstorage.service';


@Component({
  selector: 'app-orderform',
  templateUrl: './orderform.component.html',
  styleUrls: ['./orderform.component.css']
})
export class OrderformComponent implements OnInit {

  constructor (private storage : LocalstorageService){}

  ngOnInit(): void {
  }

  person = { name: '', country: ''};
  storageName: string | undefined;
  storageObject: Object = {};

    // Local storage settings
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



}
