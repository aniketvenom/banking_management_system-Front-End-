import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';

import { CreateCustomerAccountComponent } from './create-customer-account/create-customer-account.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { DepoiteComponent } from './depoite/depoite.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { BalanceComponent } from './balance/balance.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { ViewCustomerAllDetailsComponent } from './view-customer-all-details/view-customer-all-details.component';
import { SeeTransactionDetailsComponent } from './see-transaction-details/see-transaction-details.component';
import { RecycleBin } from './recycle-bin';
import { RecycleBinComponent } from './recycle-bin/recycle-bin.component';
import { ViewSingleCustomerComponent } from './view-single-customer/view-single-customer.component';


const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "customer", component: CustomerComponent },

  { path: "customerList", component: CustomerListComponent },
  { path: "createCustomerAccount", component: CreateCustomerAccountComponent },
  { path: "deposite", component: DepoiteComponent },
  { path: "withdraw", component: WithdrawComponent },
  { path: "balance", component: BalanceComponent },
  { path: "viewCustomer/:accountNumber", component: ViewCustomerAllDetailsComponent },
  { path: "updateCustomer/:accountNumber", component: UpdateCustomerComponent },
  { path: "", redirectTo: "home", pathMatch: 'full' },
  { path: "transactionDetails", component: SeeTransactionDetailsComponent },
  { path: "recycleBin", component: RecycleBinComponent },
  { path: "viewSingleCustomerDetails", component: ViewSingleCustomerComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
