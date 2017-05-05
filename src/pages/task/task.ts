import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Task } from '../../interfaces/task';

@Component({
  selector: 'page-task',
  templateUrl: 'task.html',
})
export class TaskPage implements OnInit{

  task: Task;

  constructor(private navCtrl: NavController, 
              private navParams: NavParams) { }

  public ngOnInit() {
    this.task = this.navParams.get('task');
    
  }

}
