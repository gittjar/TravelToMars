import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { MarsphotosComponent } from './marsphotos/marsphotos.component';
import { MarsplanetComponent } from './marsplanet/marsplanet.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SolarsystemComponent } from './solarsystem/solarsystem.component'; // pagination module

import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderformComponent } from './orderform/orderform.component';
import { ItemOutputComponent } from './item-output/item-output.component';
import { FavouritesComponent } from './favourites/favourites.component';

import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MarsphotosComponent,
    MarsplanetComponent,
    SolarsystemComponent,
    OrderformComponent,
    ItemOutputComponent,
    FavouritesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
