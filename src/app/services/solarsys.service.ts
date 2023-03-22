import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SolarsysService {

  constructor(private http: HttpClient) { }

    // Solarsystem
    getSolarsystemDetais(): any {
      const solarsystem = this.http.get('assets/solarsystem.json');
      return solarsystem;
    }

}
