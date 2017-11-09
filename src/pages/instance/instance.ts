import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user.model';
import { Instance } from '../../models/instance.model';

@IonicPage()
@Component({
  selector: 'page-instance',
  templateUrl: 'instance.html',
})
export class InstancePage {
  instance = new Instance('Isla');
  currentName: string;
  weights: number[] = []
  proportion: number[] = [];
  colors = ['primary', 'secondary', 'danger', 'light', 'dark', 'primary'];

  constructor(public navCtrl: NavController) {
    this.instance.addUser(new User('Michel', 67000));
    this.instance.addUser(new User('Guatón', 111998));
    this.instance.addUser(new User('Negro', 10000));
    this.instance.addUser(new User('Nacho', 89600));
    this.instance.addUser(new User('Peti', 45000));
    this.instance.addUser(new User('Alfredo', 80000));
    this.weights = new Array(this.instance.users.length).fill(10);
    this.change(1);
    console.log(this.weights)
  }

  public addUser(name: string) {
    const user = new User(name);
    this.instance.addUser(user);
  }

  public dale() {
    //this.instance.calculateBalances(null);
    console.log(this.weights)
    console.log(this.proportion)
  }

  public change(i) {
    let sum = this.weights.reduce((a,b) => a + b)
    this.proportion = this.weights.map((weight) => Math.round(this.instance.spent * weight/sum))
  }

}
