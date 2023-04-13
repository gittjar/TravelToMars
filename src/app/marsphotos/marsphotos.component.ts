import { Component, OnInit } from '@angular/core';
import { MarspicService } from '../services/marspic.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FavoritService } from '../favorit.service';

@Component({
  selector: 'app-marsphotos',
  templateUrl: './marsphotos.component.html',
  styleUrls: ['./marsphotos.component.css']
})
export class MarsphotosComponent implements OnInit{

  photos: any;
  constructor (
    private hpservice : MarspicService, 
    private huomio : MatSnackBar,
    private httpFav : FavoritService) {}

  PhotoList : any;
  p: number = 1;


  // array johon tieto menee, addItem functiosta
  photoItems = new Array();

  
  ngOnInit(): void {
    this.getPhotos();
    this.huomio.open('Ladataan kuvat!', 'OK!', {duration: 2000, panelClass: ['green-snackbar']});
    this.GetAllFavPhotos();
  }


  getPhotos(): void {
    this.hpservice.getPhotos().subscribe((data: any) => {
      this.PhotoList = data;
    })
  } 

  addItem(newItem: string) {
    this.photoItems.push(newItem);
    this.SavePhoto();
    this.huomio.open('Kuva id: ' + newItem + ' tallennettu suosikkeihin!', 'OK', {duration: 2500});
  }


  SavePhoto() {
    localStorage.setItem("favorites", JSON.stringify(this.photoItems));
  }

  DeleteAllPhotos() {
    this.photoItems = [];
    this.SavePhoto();
  }

  onRemoveFavorite(id: number) {
    const position = id + 0;
    this.photoItems.splice(position, 1);
    this.SavePhoto();
    this.huomio.open('Suosikki poistettu onnistuneesti!', 'OK', {duration: 2500});

  }

  GetAllFavPhotos() {
    let value = localStorage.getItem("favorites");
    if (value != '' && value != null && typeof value != "undefined")
    {
      this.photoItems = JSON.parse(value!);
    }}

// This adds Favorite to Cart
    addToFavoriteCart(addFavorite: string){
      this.httpFav.addToFavorite(addFavorite);
      this.huomio.open('Suosikki lisätty onnistuneesti Favoritesiin!', 'OK', {duration: 2500});
    }


  }



  



