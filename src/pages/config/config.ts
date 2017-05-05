import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '../../translate';

@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class ConfigPage implements OnInit{

  language = 'en';
  theme = 'teal';
  supportedLangs = [];
  translatedText = '';


  constructor(private navCtrl: NavController, 
              private navParams: NavParams,
              private translate: TranslateService) { }

  ngOnInit() {

    this.supportedLangs = [
          { display: 'English', value: 'en' },
          { display: 'Português', value: 'pt' }]

  }

  isCurrentLang(lang: string) {
      return lang === this.translate.currentLang;
  }

  selectLang(lang: string) {
      this.translate.use(lang);
      // this.refreshText();
  }

  refreshText() {
      // refresh translation when language change
      this.translatedText = this.translate.instant('hello world');
  }

}
