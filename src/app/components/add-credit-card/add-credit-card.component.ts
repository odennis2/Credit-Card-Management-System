import { Component, Input } from '@angular/core';
import { CardInfo } from 'src/app/models/creditcard-model';
import { CreditCardListService } from '../../services/credit-card-list.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-add-credit-card',
  templateUrl: './add-credit-card.component.html',
  styleUrls: ['./add-credit-card.component.css']
})
export class AddCreditCardComponent {

  constructor(private creditCardListService: CreditCardListService){}

  dialogTitle: string = 'Add credit card';
  dialogMessage: string = 'Here you can add a new credit card';

  newCardInfo: CardInfo = {
    card_number: 0,
    csc_code: 0,
    cardholder_name: '',
    expiration_date_month: 0,
    expiration_date_year: 0,
    issuer: ""
  }


  addCreditCard() {
    this.creditCardListService.createCreditCard(this.newCardInfo)
      .subscribe(response => {
        console.log('Credit card added:', response);
      }, error => {
        console.error('Error adding credit card:', error);
      });
  }

}
