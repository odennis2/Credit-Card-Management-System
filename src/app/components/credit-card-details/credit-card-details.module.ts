import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditCardDetailsRoutingModule } from './credit-card-details-routing.module';
import { CreditCardDetailsComponent } from './credit-card-details.component';
import { ExpirationDatePipe } from 'src/app/pipes/expiration-date.pipe';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';


@NgModule({
  declarations: [
    CreditCardDetailsComponent,
    ExpirationDatePipe
  ],
  imports: [
    CommonModule,
    CreditCardDetailsRoutingModule,
    ConfirmDialogComponent
  ]
})
export class CreditCardDetailsModule { }
