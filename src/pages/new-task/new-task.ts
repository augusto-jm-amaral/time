import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';

import { SelectColor } from '../select-color/select-color';
import { Task } from '../../interfaces/task';
import { Color } from '../../interfaces/color';
import { TaskProvider } from '../../providers/task';

@Component({
  selector: 'page-new-task',
  templateUrl: 'new-task.html',
})
export class NewTask implements OnInit {

  task: Task;
  tasks: Array<Task>;

  constructor(private navCtrl: NavController,
              private events: Events,
              private taskProvider: TaskProvider,
              private navParam: NavParams) { }

  public ngOnInit() {

    this.task = this.taskProvider.getNewTask();
    this.tasks = this.navParam.get('tasks');
  }

  public doSelectColor() {
    this.navCtrl.push(SelectColor, {task: this.task});
  }

  public doCreate(){

    this.tasks.push(this.task);
    this.tasks.sort(function(a,b) {
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    });
    this.taskProvider.save(this.tasks);
    this.navCtrl.pop();
  }

}
