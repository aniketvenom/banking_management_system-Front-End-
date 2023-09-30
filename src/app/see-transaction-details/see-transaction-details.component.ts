import { Component } from '@angular/core';
import { TransactionDetails } from '../transaction-details';
import { Authservice } from '../authservice';

@Component({
  selector: 'app-see-transaction-details',
  templateUrl: './see-transaction-details.component.html',
  styleUrls: ['./see-transaction-details.component.css']
})
export class SeeTransactionDetailsComponent {

  accountNumber : any;
  transactionDetails !: TransactionDetails[] ;

  constructor(private authService:Authservice){};

  seeTransaction(){
    this.authService.getTransactionDetails(this.accountNumber).subscribe(
      data=>
      {
        this.transactionDetails = data;
      }
    )
  }
}
