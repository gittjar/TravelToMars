import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MarspicService {

  private photoUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY';

  constructor(private http : HttpClient) { }

  getPhotos(): any {
    const photos = this.http.get(this.photoUrl);
    return photos;
  }
}
