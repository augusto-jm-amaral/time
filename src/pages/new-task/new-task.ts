import { Component, OnInit } from '@angular/core';
import { NavController, Events } from 'ionic-angular';

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

  constructor(private navCtrl: NavController,
              private events: Events,
              private taskProvider: TaskProvider) { }

  public ngOnInit() {

    this.task = {
      name: '',
      description: '',
      time: 0,
      color: {
        name: 'Teal',
        hex: '#009688',
        class: ''
      }
    };

    let self = this;
    this.events.subscribe('new:changecolor', (color: Color) => {
      self.task.color = color;
    });
  }

  public doSelectColor() {
    this.navCtrl.push(SelectColor, {color: this.task.color});
  }

  public doCreate(){
    this.taskProvider.save(this.task);
    this.navCtrl.pop();
  }

}
