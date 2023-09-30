import { Component } from '@angular/core';
import { Customer } from '../customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-single-customer',
  templateUrl: './view-single-customer.component.html',
  styleUrls: ['./view-single-customer.component.css']
})
export class ViewSingleCustomerComponent {

  customer : Customer = new Customer();
  accountNumber : any;

  constructor(private router:Router){};

  goToView(){

    this.router.navigate(['viewCustomer',this.accountNumber]);
  }
}
