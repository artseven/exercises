import { ShopPage } from '../shop/shop';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  onClickButton() {
    this.navCtrl.push(ShopPage)
  }
}
