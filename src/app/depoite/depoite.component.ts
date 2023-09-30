import { Component } from '@angular/core';
import { Customer } from '../customer';
import { Authservice } from '../authservice';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-depoite',
  templateUrl: './depoite.component.html',
  styleUrls: ['./depoite.component.css']
})
export class DepoiteComponent {

  accountNumber !: any;
  amount !: any;

  constructor(private authService:Authservice,private router:Router){};

  form = new FormGroup(
    {
      balance : new FormControl("",[Validators.min(100)]),
      accountNumber : new FormControl("",[Validators.required])

    }
  )

  get f()
  {
    return this.form.controls;
  }

  onSubmit(){

    this.authService.deposite(this.accountNumber,this.amount).subscribe(
      data=>
      {

        alert(this.amount+" has been deposited into Customer's account");
        this.router.navigate(['customerList']);
      }
    )
    
     
  }
}
