import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class ConfigPage {

  language = 'en';
  theme = 'teal';

  constructor(private navCtrl: NavController, 
              private navParams: NavParams) { }

}
