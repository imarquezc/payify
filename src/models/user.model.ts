export class User {
  public has_paid: boolean;
  public balance: number;


  constructor(public name: string, public contributed: number = 0) {
    this.has_paid = false;
  }

  public editName(new_name: string) {
  	this.name = new_name;
  }

  public togglePaid() {
  	this.has_paid = !this.has_paid;
  }

}