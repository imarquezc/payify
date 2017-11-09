import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from '../../models/user.model';
import { Instance } from '../../models/instance.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public categories: string[];
  public selected: string;

  constructor(public navCtrl: NavController) {
    this.categories = ['beer', 'football', 'build', 'heart',
    'ios-basket', 'ios-plane', 'ios-pizza-outline', 'ios-restaurant', 'ios-school-outline']
  }

  public select(category) {
    this.selected = category;
  }

}
