import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { StaffComponent } from './staff/staff.component';
import { CreateCustomerAccountComponent } from './create-customer-account/create-customer-account.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { DepoiteComponent } from './depoite/depoite.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { BalanceComponent } from './balance/balance.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { ViewCustomerAllDetailsComponent } from './view-customer-all-details/view-customer-all-details.component';
import { SeeTransactionDetailsComponent } from './see-transaction-details/see-transaction-details.component';
import { RecycleBinComponent } from './recycle-bin/recycle-bin.component';
import { ViewSingleCustomerComponent } from './view-single-customer/view-single-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerComponent,
    StaffComponent,
    CreateCustomerAccountComponent,
    CustomerListComponent,
    DepoiteComponent,
    WithdrawComponent,
    BalanceComponent,
    UpdateCustomerComponent,
    ViewCustomerAllDetailsComponent,
    SeeTransactionDetailsComponent,
    RecycleBinComponent,
    ViewSingleCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
