import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';
import { Observable, of } from 'rxjs';



export interface MapboxOutput {
  attribution: string;
  features: Feature[];
  query: [];
}

export interface Feature {
  place_name: string;
}

@Injectable({
  providedIn: 'root'
})
export class MapboxServiceService {

  constructor(private http: HttpClient) { }

  search_word(query: string):Observable<MapboxOutput> {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
    return this.http.get(url + query + '.json?access_token='
    + environment.mapbox.accessToken) as Observable<MapboxOutput>
    
  }
}
