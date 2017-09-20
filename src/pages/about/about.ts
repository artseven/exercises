import { ResetComponent } from './../../components/reset.component';
import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  @Input() change: boolean; 

  tap: number = 0;
  press: number = 0;
  constructor(public navCtrl: NavController) {

  }
  

  resetCheck() {
    if (this.change === true)  {
      this.tap = 0;
      this.press = 0;
      console.log('RESETTED!')
      return this.tap
    }
  }


  onElementTapped() {
    this.tap++;
  }

  onElementPressed() {
    this.press++;
  }

}
