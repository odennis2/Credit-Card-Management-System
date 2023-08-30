import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomescreenComponent } from './components/homescreen/homescreen.component';
import { AddCreditCardComponent } from './components/add-credit-card/add-credit-card.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreditCardDetailsComponent } from './components/credit-card-details/credit-card-details.component';
import { HttpClientModule } from '@angular/common/http';
import { CreditCardDetailsModule } from './components/credit-card-details/credit-card-details.module';
import { ExpirationDatePipe } from './pipes/expiration-date.pipe';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomescreenComponent,
    AddCreditCardComponent,
    TransactionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CreditCardDetailsModule,
    ConfirmDialogComponent,
    ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
