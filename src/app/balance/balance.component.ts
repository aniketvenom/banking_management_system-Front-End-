import { Component } from '@angular/core';
import { Authservice } from '../authservice';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent {

  accountNumber !:any ;
  money !: any;

  constructor(private authService:Authservice){}

  balance(){

    this.authService.checkBalance(this.accountNumber).subscribe(
      data=>
      {
            this.money=data;
            console.log(data);
      }
    )
  }
}
