import { Component } from '@angular/core';
import { MapboxServiceService, Feature } from '../mapbox-service.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  details: any = [];

  constructor(private mapboxService: MapboxServiceService) {}
  addresses: any = [];
  selectedAddress: any;

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

  onSelect(address: string) {
    this.selectedAddress = address;
    this.addresses = [];
  }

}
