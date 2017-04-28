import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/* Pages */
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { NewTask } from '../pages/new-task/new-task';
import { SelectColor } from '../pages/select-color/select-color';

/* Components */
import { TaskItem } from '../components/task-item/task-item';

@NgModule({
  declarations: [
    MyApp,
    
    /* Pages */
    HomePage,
    ListPage,
    NewTask,
    SelectColor,

    /* Components */
    TaskItem,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    /* Pages */
    HomePage,
    ListPage,
    NewTask,
    SelectColor,

    /* Components */
    TaskItem
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
