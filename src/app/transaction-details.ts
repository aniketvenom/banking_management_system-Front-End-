import { Time } from "@angular/common";
import { Customer } from "./customer";

export class TransactionDetails {

    transactionId !: number;


    amount !: any;


    dateOfTransaction !: Date;


    timeOfTransaction !: Time;


    transactionType !: string;

    customer: Customer = new Customer();
}
