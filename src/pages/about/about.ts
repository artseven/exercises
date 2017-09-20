import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  tap: number = 0;
  press: number = 0;
  constructor(public navCtrl: NavController) {

  }

  onElementTapped() {
    this.tap++;
  }

  onElementPressed() {
    this.press++;
  }

}
