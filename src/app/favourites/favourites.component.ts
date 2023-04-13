import { Component } from '@angular/core';
import { FavoritService } from '../favorit.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent {

  constructor(private FavService : FavoritService){}

  favoriteitems = this.FavService.GetAllFavs();
  favoriteitemsdelete = this.FavService.clearFavoriteCart();

  
}
