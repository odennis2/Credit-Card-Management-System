import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreditCardListService } from 'src/app/services/credit-card-list.service';
import { CardInfo } from 'src/app/models/creditcard-model';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css']
})
export class HomescreenComponent {
  dialogTitle: string = 'Credit card list';
  dialogMessage: string = 'Here you can see all credit cards, click on a specific card for more details';
  creditCardList: CardInfo[] = [];

  constructor(private router: Router, private creditCardListService: CreditCardListService) {}

  ngOnInit() {
    this.creditCardListService.getAllCreditCard().then(creditCards => {
      this.creditCardList = creditCards;
    })
  }

  navigateToDetails(card: CardInfo) {
    this.router.navigate(['/credit-card-details', card.card_number]); // Navigate with card number as parameter
  }
}
