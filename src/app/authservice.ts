import { Observable } from "rxjs";
import { Customer } from "./customer";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TransactionDetails } from "./transaction-details";
import { RecycleBin } from "./recycle-bin";
import { JwtToken } from "./jwt-token";
import { Staff } from "./staff";

const CustomerApi = "http://localhost:8080/";
const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };


@Injectable({
    providedIn: 'root'
})

export class Authservice {


    constructor(private http: HttpClient) { };

    createCustomerAccount(customer: Customer): Observable<object> {
        return this.http.post<any>(CustomerApi + "createNewCustomerAccount", customer);
    }

    getAllCustomers(): Observable<Customer[]> {
        return this.http.get<Customer[]>(CustomerApi + 'getCustomersAccounts');
    }

    deposite(accountNumber: any, amount: any): Observable<Object> {
        return this.http.post(CustomerApi + "depositIntoCustomerAccountWithAccountNumber/" + `${accountNumber}` + "/amount/" + `${amount}`, httpOptions);
    }


    checkBalance(accountNumber: any): Observable<object> {
        return this.http.get(CustomerApi + "checkBalance/" + `${accountNumber}`);
    }

    getCustomerByAccountNumber(accountNumber: any): Observable<Customer> {
        return this.http.get<Customer>(CustomerApi + "getCustomerByAccountNumber/" + `${accountNumber}`);
    }

    updateCustomerAccount(accountNumber: any, customer: Customer): Observable<object> {
        return this.http.post(CustomerApi + "updateCustomerUsingaccountNumber/" + `${accountNumber}`, customer);
    }

    withdraw(accountNumber: any, amount: any): Observable<Object> {
        return this.http.post(CustomerApi + "withdrawFromCustomerAccountWithAccountNumber/" + `${accountNumber}` + "/amount/" + `${amount}`, httpOptions);
    }

    getTransactionDetails(accountNumber:any):Observable<TransactionDetails[]>
    {
        return this.http.get<TransactionDetails[]>(CustomerApi+"getCustomerTransactionDetailsUsingAccountNumber/"+`${accountNumber}`);
    }

    deleteCustomer(accountNumber:any):Observable<Object>
    {
        return this.http.delete(CustomerApi+"deleteCustomerAccountByAccountNumber/"+`${accountNumber}`);
    }

    getAllDeletedAccounts(): Observable<RecycleBin[]>
    {
        return this.http.get<RecycleBin[]>(CustomerApi+"getAllDeletedAccounts");
    }

    login(userName:String,password:any):Observable<any>
    {
        return this.http.post(CustomerApi+"login/"+`${userName}`+"/"+`${password}`,httpOptions);
    }

    createStaffMemberAccount(staff:Staff): Observable<Object>
    {
        return this.http.post<any>(CustomerApi+"createStaffAccount",staff);
    }

    getAllStaffMember(): Observable<Staff[]>
    {
        return this.http.get<Staff[]>(CustomerApi+"getAllStaffMembers");
    }

    updateStaffMember(staff:Staff):Observable<Staff>
    {
        return this.http.post<Staff>(CustomerApi+"updateStaffMemberDetailsUsingStaffId",staff);
    }

    getStaffMemberUsingId(staffId:String): Observable<Staff>
    {
        return this.http.get<Staff>(CustomerApi+"getStaffMemberUsingStaffId/"+`${staffId}`);
    }

    deleteStaffMember(staffId: String):Observable<any>
    {
        return this.http.delete(CustomerApi+"deleteStaffMemberByStaffId/"+`${staffId}`);
    }
}
