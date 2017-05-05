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
import { ConfigPage } from '../pages/config/config';
import { TaskPage } from '../pages/task/task';
import { NewTask } from '../pages/new-task/new-task';
import { SelectColor } from '../pages/select-color/select-color';
import { Pause } from '../pages/pause/pause';

/* Components */
import { TaskItem } from '../components/task-item/task-item';

/* Providers */
import { TaskProvider } from '../providers/task';

/* Translate */
import { TRANSLATION_PROVIDERS, TranslatePipe, TranslateService } from '../translate';

@NgModule({
  declarations: [
    MyApp,
    
    /* Pages */
    HomePage,
    NewTask,
    SelectColor,
    Pause,
    ConfigPage,
    TaskPage,

    /* Components */
    TaskItem,

    /* Pipe */
    TranslatePipe
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
    NewTask,
    SelectColor,
    Pause,
    ConfigPage,
    TaskPage,

    /* Components */
    TaskItem
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TaskProvider,
    TRANSLATION_PROVIDERS,
    TranslateService
  ]
})
export class AppModule {}
