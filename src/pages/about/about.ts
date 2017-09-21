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

  onResetPressed(resetType: string) {
    switch (resetType) {
      case 'tap': 
        this.tap = 0;
        break;
      case 'press':
        this.press = 0;
        break;
      default: 
        this.tap = 0;
        this.press = 0;
    }
  }
  
  checkForWin() {
    return this.tap == 2 && this.press == 4;
  }


}
