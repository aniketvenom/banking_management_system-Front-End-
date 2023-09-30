import { Component, OnInit } from '@angular/core';
import { Authservice } from '../authservice';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  customer : Customer = new Customer();
  accountNumber : any; 
 
  constructor(private authService: Authservice, private router: Router,private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.accountNumber = this.activatedRoute.snapshot.params['accountNumber'];
    this.authService.getCustomerByAccountNumber(this.accountNumber).subscribe(
      data=>
      {
        this.customer=data;
      }
    )

  }

  form = new FormGroup(
    {
      name: new FormControl("",[Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
      email:  new FormControl("",[Validators.required, Validators.email , Validators.maxLength(30)]),
      phone: new FormControl("",[Validators.required, Validators.minLength(10), Validators.maxLength(10), 
      Validators.pattern('[6789][0-9]{9}')]),
      dob: new FormControl("",[Validators.required]),
      balance : new FormControl("",[Validators.required]),
      aadharNumber : new FormControl("",[Validators.required,Validators.max(12),Validators.min(12)]),
      accountType :new FormControl("",[Validators.required]),
      panNumber : new FormControl("",[Validators.required,Validators.pattern('[A-Z]{5}[0-9]{4}[A-Z]{1}'),Validators.max(10),Validators.min(10)]),
      gender: new FormControl("",[Validators.required]),
      city: new FormControl("",[Validators.required]),
      state: new FormControl("",[Validators.required]),
      pin : new FormControl("",[Validators.required])
    }
  );

  get f()
  {
    return this.form.controls;
  }



  onSubmit()
  {
    this.authService.updateCustomerAccount(this.accountNumber,this.customer).subscribe(
      data=>
      {
        alert("Customer's details has been updated");
        console.log(data);
        this.router.navigate(["customerList"]);
      }
    )
  }
}
