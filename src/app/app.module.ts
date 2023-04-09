import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoiamF5MDEyNzIwMDEiLCJhIjoiY2xma3JkMmI1MGRqZDN4cGVodjg3bXA1NyJ9.-v3RmoteVuojjxKG3aLMHg', // Optional, can also be set per map (accessToken input of mgl-map)
    })],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
