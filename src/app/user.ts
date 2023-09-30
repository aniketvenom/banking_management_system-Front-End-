import { Address } from "./address";

export class User {

    id !: number;
    name !: String;
    lastName !: String;
    email !: String;
    contactNumber !: number;
    gender !: String;
    dateOfBirth !: Date;
    userId !: String;
    password !: String;
    IFSCCode = "BOAA3112980";
    
    address : Address = new Address();
}
