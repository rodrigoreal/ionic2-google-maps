import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {GoogleMap, GoogleMapsEvent} from 'ionic-native';

@Component({
  templateUrl: 'build/pages/map/map.html',
})
export class MapPage {
  map: GoogleMap;
  constructor(private platform: Platform) {
    platform.ready().then(() => this.onPlatformReady());
  }

  private onPlatformReady(): void {
    this.map = new GoogleMap('map');
    this.map.on(GoogleMapsEvent.MAP_READY)
      .subscribe(() => this.onMapReady());
  }

  private onMapReady(): void {
    console.log('Map ready');
  }
}
