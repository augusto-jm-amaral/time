import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Task } from '../../interfaces/task';
import { NewTask } from '../new-task/new-task'
import { TaskProvider } from '../../providers/task';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  tasks: Array<Task>;

  constructor(private navCtrl: NavController,
              private taskProvider: TaskProvider) { }

  ngOnInit() {
    this.loadList();
  }

  private loadList(){
    this.taskProvider.get()
      .then((tasks) => {
        this.tasks = tasks;
      });
  }

  public doNew() {
    this.navCtrl.push(NewTask, { tasks: this.tasks });
  }

}
