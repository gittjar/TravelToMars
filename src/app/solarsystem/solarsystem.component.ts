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
  }

  getSolarsystemDetails(): void {
    this.hpservice.getSolarsystemDetais().subscribe((data: any) => {
     this.solarSystem = data;
    })
  }
}
