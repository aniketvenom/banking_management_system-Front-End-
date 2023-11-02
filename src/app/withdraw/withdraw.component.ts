import { Component, OnInit } from '@angular/core';
import { Authservice } from '../authservice';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../customer';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  accountNumber !: any;
  amount !: any;
  successClass!: string;
  customer: Customer = new Customer();
  accountBalance !: number;

  constructor(private authService: Authservice, private router: Router) { };

  ngOnInit(): void {
    // this.getCustomer();
  }
  ;

  getCustomer() {
    this.authService.getCustomerByAccountNumber(this.accountNumber).subscribe(
      data => {

        this.customer = data;
        console.log(this.customer);
      }
    )
  }



  form = new FormGroup(
    {
      balance: new FormControl("", [Validators.min(100)]),
      accountNumber: new FormControl("", [Validators.required])

    }
  )

  get f() {
    return this.form.controls;
  }

  onSubmit() {


    this.getCustomer();
    this.accountBalance = this.customer.balance;


    if (this.accountBalance > this.amount) {

      this.authService.withdraw(this.accountNumber, this.amount).subscribe(
        data => {
          alert(this.amount + " Has Been Dedeucted From Customer's Account");
          this.router.navigate(['customerList']);

        }
      );
    }
    else {
      alert("You need at least Rs.100  To withdraw balance");
    }




  }
}
