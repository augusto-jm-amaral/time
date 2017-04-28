import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SelectColor } from '../select-color/select-color';

@Component({
  selector: 'page-new-task',
  templateUrl: 'new-task.html',
})
export class NewTask {

  constructor(private navCtrl: NavController) { }

  public doSelectColor() {
    this.navCtrl.push(SelectColor, {});
  }

}
