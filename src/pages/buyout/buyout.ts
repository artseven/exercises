import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-buyout',
  templateUrl: 'buyout.html',
})
export class BuyoutPage implements OnInit {
  name: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyoutPage');
  }
  
  ngOnInit() {
    this.name = this.navParams.get('passedName');
  }

  onBuyClick() {
    this.navCtrl.popToRoot();
  }


}
