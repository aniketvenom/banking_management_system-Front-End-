import { User } from "./user";

export class Customer extends User {

    dateOfAccountCreation !: Date;
    balance !: any;
    aadharNumber !: any;
    accountNumber !: any;
    panNumber !: String;
    accountType !: String;

    constructor()
    {
        super();
        
    };
}
