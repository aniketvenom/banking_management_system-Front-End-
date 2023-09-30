import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { Authservice } from '../authservice';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-customer-all-details',
  templateUrl: './view-customer-all-details.component.html',
  styleUrls: ['./view-customer-all-details.component.css']
})
export class ViewCustomerAllDetailsComponent implements OnInit {

  customer : Customer = new Customer();
  accountNumber : any;

  constructor(private authService:Authservice,private activatedRouter:ActivatedRoute,private router:Router){};
  
  ngOnInit(): void {

    this.accountNumber = this.activatedRouter.snapshot.params['accountNumber'];
    this.authService.getCustomerByAccountNumber(this.accountNumber).subscribe(
      data=>
      {
        this.customer=data;
        console.log(this.customer);
      }
    )
  }
;



}
