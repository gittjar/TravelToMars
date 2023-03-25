import { Component, OnInit } from '@angular/core';
import { MarspicService } from '../services/marspic.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-marsphotos',
  templateUrl: './marsphotos.component.html',
  styleUrls: ['./marsphotos.component.css']
})
export class MarsphotosComponent implements OnInit{

  photos: any;
  constructor (
    private hpservice : MarspicService, 
    private huomio : MatSnackBar) {}

  PhotoList : any;
  p: number = 1;

  // array johon tieto menee, addItem functiosta
  photoItems = new Array();
  
  ngOnInit(): void {
    this.getPhotos();
    this.huomio.open('Kuvat ladattu!', 'OK!', {duration: 2000, panelClass: ['green-snackbar']});
  }


  getPhotos(): void {
    this.hpservice.getPhotos().subscribe((data: any) => {
      this.PhotoList = data;
    })
  } 

  addItem(newItem: string) {
    this.photoItems.push(newItem);
    this.huomio.open('Kuva id: ' + newItem + ' tallennettu suosikkeihin!', 'OK', {duration: 2500});
  }

  }



