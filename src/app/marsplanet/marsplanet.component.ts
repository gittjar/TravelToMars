import { Component, OnInit } from '@angular/core';
import { MarsplanetService } from '../services/marsplanet.service';

@Component({
  selector: 'app-marsplanet',
  templateUrl: './marsplanet.component.html',
  styleUrls: ['./marsplanet.component.css']
})
export class MarsplanetComponent implements OnInit  {

  constructor (private dataService : MarsplanetService){}

  marsDetails : any;
  phobosDetails : any;
  deimosDetails : any;

  ngOnInit(): void {
   this.getMarsDetailz();
   this.getPhobosDetailz();
   this.getDeimosDetailz();
  }

  getMarsDetailz(): void {
    this.dataService.getMarsDetais().subscribe((data: any) => {
      this.marsDetails = data;
    })
  }

  getPhobosDetailz(): void {
    this.dataService.getPhobosDetails().subscribe((data: any) =>{
      this.phobosDetails = data;
    })
  }

  getDeimosDetailz(): void {
    this.dataService.getDeimosDetails().subscribe((data: any) => {
      this.deimosDetails = data;
    })
  }  
  
}
