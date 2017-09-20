import { Component, Input, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  evt;
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

  onResetPressed(evt) {
    console.log(evt);
    this.tap = evt;
    this.press = evt;
  }

}
