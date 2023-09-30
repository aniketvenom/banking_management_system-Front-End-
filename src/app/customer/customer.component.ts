import { Component } from '@angular/core';
import { Authservice } from '../authservice';
import { Router } from '@angular/router';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {


  constructor(private router:Router){};

  goToCreateCustomer(){

    this.router.navigate(['createCustomerAccount']);
  }
}
