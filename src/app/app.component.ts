import { Component } from '@angular/core';
import { Customers } from './customers';
import { EventService } from './data';
declare let toastr: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showaddress = true;
  hideshowform = false;
  displayVal = false;
  cust;
  childprop;
  // customers;
  customers: Customers[] = [
    {
      name: 'Pavan',
      email: 'k.pavankumaar@gmail.com',
      number: 6666666666,
      address: {
        street: 'street no11',
        city: 'Hyderabad',
        state: 'Telanaga'
      }
    },
    {
      name: 'Ramesh',
      email: 'ramesh@gmail.com',
      number: 7777777777,
      address: {
        street: 'street no11',
        city: 'Hyderabad',
        state: 'Telanaga'
      },
    },
    {
      name: 'Srinath',
      email: 'srikanth@gmail.com',
      number: 9999999999,
      address: {
        street: 'street no11',
        city: 'Hyderabad',
        state: 'Telanaga'
      }
    }

  ];
  getService () {
    const eventService = new EventService();
  }
  // name = 'Ravi';
  // email = 'k.pavankumaar@gmail.com';
  // number = '9999999999';
  // address = {
  //   street : 'street no11',
  //   city: 'Hyderabad',
  //   state: 'Telanaga'
  // };
  color = 'lightgreen';
  states = ['Tamil nadu', 'Telangana', 'Delhi'];
  changeColor (e) {
    this.color = e;
  }
  hideshow() {
    // console.log("hideshowmethod");
    this.displayVal = this.displayVal === true ? false : true;
    this.hideshowform = this.hideshowform === true ? false : true;
  }
  updateCustInfo(e) {
    console.log(e);
    this.cust = e;
  }
  getInfo(e) {
    console.log('recieved : ' + e);
    toastr.success('test content');
    // this.customers = e;
  }
}
