import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { Authservice } from '../authservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  
  customer : Customer[] | undefined;
  
   constructor(private authService:Authservice,private router:Router){};

  ngOnInit(): void {
    this.getAllCustomer();
  }


  getAllCustomer()
  {
    this.authService.getAllCustomers().subscribe(
      data=>
      {
        this.customer = data;
      }
    )
  }

  updateCustomer(accountNumber : any)
  {

    this.router.navigate(['updateCustomer',accountNumber]);

  }

  viewCustomer(accountNumber : any)
  {

    this.router.navigate(['viewCustomer',accountNumber])
  }

  deleteCustomer(accountNumber : any)
  {

    this.authService.deleteCustomer(accountNumber).subscribe(
      data=>
      {
        alert("Account has been deleted");
        this.router.navigate(['recycleBin']);
      }
    )
  }
}
