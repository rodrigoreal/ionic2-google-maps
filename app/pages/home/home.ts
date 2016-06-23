import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {MapPage} from "../map/map";

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private navController: NavController) {

  }

  openMap() {
    this.navController.push(MapPage);
  }
}
