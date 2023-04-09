import { Component, ViewChild, ElementRef } from '@angular/core';
import { MapboxServiceService, Feature } from '../mapbox-service.service';
import { GoogleMap, } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  details: any = [];
  addresses: any = [];
  selectedAddress: any;
  @ViewChild('map') mapRef: ElementRef<HTMLElement>;
  newMap: GoogleMap;
  cpos: any = [];
  center: any = {
    lat: 17.6022295,
    lng: 121.6892483,
  } 
  latitude: any;
  longitute: any;

  constructor(private mapboxService: MapboxServiceService) {}
  

  ngAfterViewInit(){
  }

  async search(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    if (searchTerm && searchTerm.length > 0) {
     const test =  await this.mapboxService.search_word(searchTerm).subscribe(res => {
      this.details = res;
      this.addresses = res.features;
      // this.addresses = res.map(res.features.map.place_name);
      console.log(this.details);
     });


        //   this.addresses = features.map(feat => feat.place_name);
        // });
      } else {
        this.addresses = [];
      }
  }

  async createMap(lat: any, lng: any) {
    this.newMap = await GoogleMap.create({
      id: 'booking-app-map',
      element: this.mapRef.nativeElement,
      apiKey: environment.google,
      config: {
        center:{
          lat: lat,
          lng: lng,
        },
        zoom: 13,
      },
    });
    // this.addMarker(this.latitude, this.longitute);
    this.addMarker(this.center.lat, this.center.lng);

  }

  async addMarker(lat: any, lng: any){
    await this.newMap.addMarker({
      coordinate: {
        lat: lat,
        lng: lng,
      },
      draggable: true
    });
  }

  onSelect(address: string) {
    this.selectedAddress = address;
    console.log(this.selectedAddress);
    this.center.lat = this.selectedAddress.geometry.coordinates[0];
    this.center.lng = this.selectedAddress.geometry.coordinates[1];
    console.log(this.center.lat);
    console.log(this.center.lng)
    this.createMap(this.center.lat, this.center.lng);

    // this.addresses = [];
  }

}
