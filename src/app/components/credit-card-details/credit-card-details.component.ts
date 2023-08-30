import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreditCardListService } from 'src/app/services/credit-card-list.service';
import { CardInfo } from 'src/app/models/creditcard-model';
import { Transaction } from 'src/app/models/transaction-model';
import { HomescreenComponent } from '../homescreen/homescreen.component';
import { TransactionsService } from '../../services/transactions.service';

@Component({
  selector: 'app-credit-card-details',
  templateUrl: './credit-card-details.component.html',
  styleUrls: ['./credit-card-details.component.css']
})
export class CreditCardDetailsComponent implements OnInit {
  dialogTitle: string = 'Credit card overview';
  dialogMessage: string = 'Here you can see credit card details, and the transactions tied to the card';

  cardNumber!: string;
  selectedCard: CardInfo | undefined;
  transactions: Transaction[] = [];
  filteredTransactions: Transaction[] = [];

  constructor(
    private route: ActivatedRoute,
    private creditCardService: CreditCardListService,
    private transactionsService: TransactionsService
    ) {}

    ngOnInit() {
      this.route.params.subscribe(params => {
        this.cardNumber = params['cardNumber'];
        const card = this.creditCardService.getCreditCardByNumber(this.cardNumber);
        this.selectedCard = card ?? undefined;
        if (this.selectedCard) {
          // Fetch transactions first
          this.transactionsService.getAllTransactions().then(transactions => {
            this.transactions = transactions;
    
            // Now filter transactions for the selected card
            this.filteredTransactions = this.filterTransactionsForCard(this.cardNumber);
          });
        }
      });
    }
    

  formatTimestampToDate(timestamp: number): string {
    return this.transactionsService.formatTimestampToDate(timestamp);
  }

  removeCard(cardNumber: number){
    console.log("removed card", cardNumber);
    this.creditCardService.deleteCreditCard(cardNumber)
    .subscribe(response => {
      console.log('Card deleted:', response);
    }, error => {
      console.error('Error deleting card:', error);
    });
    
    //call api
  }
filterTransactionsForCard(cardNumber: string): Transaction[] {
  return this.transactions.filter(transaction =>
    transaction.credit_card.card_number.toString() === cardNumber
  );
}

}

