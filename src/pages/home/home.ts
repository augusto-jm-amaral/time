import { Component, OnInit } from '@angular/core';
import { NavController, Events } from 'ionic-angular';

import { Task } from '../../interfaces/task';
import { NewTask } from '../new-task/new-task'
import { TaskProvider } from '../../providers/task';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  taskItems: Array<Task>;

  constructor(private navCtrl: NavController,
              private taskProvider: TaskProvider,
              private events: Events) { }

  ngOnInit() {
    this.loadList();
    this.events.subscribe('new:create', () => {
      this.loadList();
    })

  }

  private loadList(){
    this.taskProvider.getList()
      .then((tasks) => {
        this.taskItems = tasks;
      });
  }

  private doNew() {
    this.navCtrl.push(NewTask);
  }

}
