import { Component, OnInit} from '@angular/core';
import { SolarsysService } from '../services/solarsys.service';

@Component({
  selector: 'app-solarsystem',
  templateUrl: './solarsystem.component.html',
  styleUrls: ['./solarsystem.component.css']
})
export class SolarsystemComponent implements OnInit {



  constructor(private hpservice : SolarsysService){}

  solarSystem : any;

  ngOnInit(): void {
    this.getSolarsystemDetails();

    // LIKE BUTTON COMMON
    const storedPlanet = localStorage.getItem('myPlanet');
    if (storedPlanet) {
      const parsedPlanet = JSON.parse(storedPlanet);
      this.likes = parsedPlanet.likes;
      this.planet = parsedPlanet;
    }
  }

  getSolarsystemDetails(): void {
    this.hpservice.getSolarsystemDetais().subscribe((data: any) => {
     this.solarSystem = data;
    })
  }
// LIKE BUTTON COMMON
  likes = 0;
  planet = {
    title: 'Awesome Planet!',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    likes: this.likes
  };

  onLikeClick() {
    this.likes++;
    this.planet.likes = this.likes;
    localStorage.setItem('myPlanet', JSON.stringify(this.planet));
  }



}
