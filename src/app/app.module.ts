import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

/* Modules */
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/* Pages */
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { NewTask } from '../pages/new-task/new-task';
import { SelectColor } from '../pages/select-color/select-color';

/* Components */
import { TaskItem } from '../components/task-item/task-item';

/* Providers */
import { TaskProvider } from '../providers/task';

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
    IonicStorageModule.forRoot()
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TaskProvider
  ]
})
export class AppModule {}
