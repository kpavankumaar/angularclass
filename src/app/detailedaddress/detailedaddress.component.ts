import { Component, Input, Output, EventEmitter } from '@angular/core';
import { customers } from '../data' ;
@Component({
  selector: 'app-detailedaddress',
  templateUrl: './detailedaddress.component.html',
  styleUrls: ['./detailedaddress.component.css']
})
export class DetailedaddressComponent {
  @Input() states;
  @Output() customerdetail: EventEmitter<any> = new EventEmitter();
  // customerdetail.emit(cust);
  customerInfo;
  constructor( ) {
    console.log('inside customers:' + JSON.stringify(customers)) ;
    // cust = customers;
    // console.log(cust);
    this.customerInfo = JSON.stringify(customers);
  }
  run() {
    console.log('object details :' + JSON.stringify(customers));
    this.customerdetail.emit(JSON.stringify(customers));
  }

  testfun() {
    return 'this is easy way of communicating';
  }
}
