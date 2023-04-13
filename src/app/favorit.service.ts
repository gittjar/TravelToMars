import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritService {

   // array 
   private favoriteitems = Array();

  constructor(
  ) { }

  addToFavorite(addFavorite: string): void {
    this.favoriteitems.push(addFavorite)
    this.SaveFavorite();
  }

  getFavoriteItems() 
  {
    return this.favoriteitems;
  }

  clearFavoriteCart() {
    this.favoriteitems = []
    return this.favoriteitems;
  }

  SaveFavorite() {
    localStorage.setItem("favs", JSON.stringify(this.favoriteitems));
  }

  GetAllFavs() {
  let arvo = localStorage.getItem('favs');
  return this.favoriteitems = JSON.parse(arvo!);
 // this.favoriteitems = JSON.parse(localStorage.getItem('favs'));
  }
}
