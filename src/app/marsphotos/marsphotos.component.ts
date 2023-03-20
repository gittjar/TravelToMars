import { Component, OnInit } from '@angular/core';
import { MarspicService } from '../services/marspic.service';



@Component({
  selector: 'app-marsphotos',
  templateUrl: './marsphotos.component.html',
  styleUrls: ['./marsphotos.component.css']
})
export class MarsphotosComponent implements OnInit {


  constructor (private hpservice : MarspicService) {}

  PhotoList : any;




  ngOnInit(): void {
    this.getPhotos();
  }

  getPhotos(): void {
    this.hpservice.getPhotos().subscribe((data: any) => {
      this.PhotoList = data;
    })
  } 

}
