import { Injectable, OnInit } from '@angular/core';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Task } from '../interfaces/task';

@Injectable()
export class TaskProvider implements OnInit {

  private tasks: Array<Task>;

  constructor(private storage: Storage,
              private events: Events) {
    
  }

  ngOnInit() {
      
  }

  public save(task: Task) {
    
    this.storage.ready().then(() => {

      this.storage.get('tasks').then((val) => {
        if(val){
          val.push(task);
          val.sort(function(a,b) {
              return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
          })
          this.storage.set('tasks', val);
          this.events.publish('new:create');
        }else{
          val = []
          val.push(task);
          this.storage.set('tasks', val);
          this.events.publish('new:create');
        }
      })
    });
  }

  public getList(): Promise<Array<Task>>{
    let self = this;

    return new Promise((resolve, reject)=> {
        self.storage.ready().then(() => {
          self.storage.get('tasks').then((val) => {
            resolve(val || []);  
          });
        });
      } 
    );
  }

}
