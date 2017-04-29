import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';

import { Color } from '../../interfaces/color';

@Component({
  selector: 'page-select-color',
  templateUrl: 'select-color.html',
})
export class SelectColor implements OnInit{

  private colorList: Array<Color>;
  private selected: Color;

  constructor(private navCtrl: NavController, 
              private event: Events,
              private navParams: NavParams) { }

  ngOnInit() {
    this.selected = this.navParams.get('color');
    let colors = {
      'Red': '#F44336',
      'Pink': '#E91E63',
      'Purple': '#9C2B0',
      'Deep Purple': '#673AB7',
      'Indingo': '#3F51B5',
      'Blue': '#2196F3',
      'Light Blue': '#03A9F4',
      'Cyan': '#00BCD4',
      'Teal': '#009688',
      'Green': '#4CAF50',
      'Light Green': '#8BC34A',
      'Lime': '#CDDC39',
      'Yellow': '#FFEB3B',
      'Amber': '#FFC107',
      'Orange': '#FF9800',
      'Deep Orange': '#FF5722',
      'Brown': '#795548',
      'Grey': '#9E9E9E',
      'Blue Grey': '#607D8B',
      'Black': '#000000',
      'White': '#FFFFFF'
    }

    this.colorList = new Array<Color>();
     
    for(let c in colors)
      this.colorList.push(      {
        name: c,
        hex: colors[c],
        class: ''
      });
  }

  public doSelect(color: Color){
    this.event.publish('new:changecolor', color);
    this.navCtrl.pop();
  }

}
