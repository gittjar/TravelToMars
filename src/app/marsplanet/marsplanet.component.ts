import { Component, OnInit } from '@angular/core';
import { MarsplanetService } from '../services/marsplanet.service';

@Component({
  selector: 'app-marsplanet',
  templateUrl: './marsplanet.component.html',
  styleUrls: ['./marsplanet.component.css']
})
export class MarsplanetComponent implements OnInit  {

  constructor (private dataService : MarsplanetService){}

  marsDetails: any;
  phobosDetails : any;

  ngOnInit(): void {
   this.getMarsDetais();
   this.getPhobosDetais();
  }

  getMarsDetais(): void {
    this.dataService.getMarsDetais().subscribe((data: any) => {
      this.marsDetails = data;
    })
  }

  getPhobosDetais(): void {
    this.dataService.getPhobosDetails().subscribe((data: any) =>{
      this.phobosDetails = data;
    })
  }
  

}
