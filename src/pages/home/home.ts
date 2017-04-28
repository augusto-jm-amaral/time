import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Task } from '../../interfaces/task';
import { NewTask } from '../new-task/new-task'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  taskItems: Array<Task> = new Array<Task>();

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    
    for (var i = 1; i <= 3; i++) {

      this.taskItems.push({name: 'Item ' + i});

    }
  }

  private doNew() {
    this.navCtrl.push(NewTask);
  }

}
