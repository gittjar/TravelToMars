import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarsplanetService {

  constructor(private http: HttpClient) { }

  // Mars
  getMarsDetais(): any {
    const marstieto = this.http.get('assets/mars.json');
    return marstieto;
  }

  // Phobos
  getPhobosDetails(): any {
    const phobostieto = this.http.get('assets/phobos.json');
    return phobostieto;
  }

  // Deimos
  getDeimosDetails(): any {
    const deimostieto = this.http.get('assets/deimos.json');
    return deimostieto;
  }
  
}
