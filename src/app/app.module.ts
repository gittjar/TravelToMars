import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { MarsphotosComponent } from './marsphotos/marsphotos.component';
import { MarsplanetComponent } from './marsplanet/marsplanet.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MarsphotosComponent,
    MarsplanetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
