import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarsphotosComponent } from './marsphotos/marsphotos.component';
import { MarsplanetComponent } from './marsplanet/marsplanet.component';
import { SolarsystemComponent } from './solarsystem/solarsystem.component';

const routes: Routes = [
{path : 'marsphotos', component : MarsphotosComponent },
{path : 'marsplanet', component : MarsplanetComponent },
{path : 'solarsystem', component : SolarsystemComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
