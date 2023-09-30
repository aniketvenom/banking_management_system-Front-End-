import { Designation } from "./designation";
import { User } from "./user";

export class Staff extends User {

    
	salary !: any;

	
	dateOfJoining !: Date;
	
	
	staffId !: string

	
	designation : Designation = new Designation();

    constructor()
    {
        super();
    }
	
}
