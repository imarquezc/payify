import { User } from './user.model';

export class Instance {

  public users: User[] = [];
  public spent: number = 0;
  public balances: number[];
  public icon: string;

  constructor(public name: string) {
  }

  public addUser(user: User) {
  	this.users.push(user);
    if (user.contributed) {
      this.spent += user.contributed;
    }
  }

  public removeUser(user: User) {
    const index = this.users.indexOf(user)
    if (index > -1) {
      this.users.splice(index, 1);
    } 
  }

  public calculateBalances(weights) {
    if (weights) {
      this.balances = this.users.map((user, i) => this.users[i].contributed - Math.round(this.spent * weights[i]) )
    } else {
      const mean = Math.round(this.spent/this.users.length);
      this.balances = this.users.map((user) => mean - user.contributed);
    }
    let leftOver = this.balances.reduce((a, b) => a + b);
    this.balances[0] -= leftOver;
    console.log(leftOver);
    console.log(this.balances);
  }

}