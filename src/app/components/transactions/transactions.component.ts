import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { TransactionsService } from 'src/app/services/transactions.service';
import { Transaction } from 'src/app/models/transaction-model';
import { filter } from 'rxjs';
import { CreditCard } from '../../../../../credit-card-server/src/credit-card.type';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit{
  dialogTitle: string = 'Transactions overview';
  dialogMessage: string = 'Here you can see all transactions, and create new ones';

  transactionList: Transaction[] = [];
  filteredTransactionList: Transaction[] = [];
  newTransaction: Transaction = {
    credit_card: {
      card_number: '',
      csc_code: 0,
      cardholder_name: '',
      expiration_date_month: 0,
      expiration_date_year: 0,
      issuer: ''
    },
    uid: '',
    amount: 0,
    comment: '',
    date: 0,
    currency: ''
  };


  constructor(private transactionsService: TransactionsService) {}

  ngOnInit() {
    this.transactionsService.getAllTransactions().then(transactions => {
      this.transactionList = transactions;
    });
  }

  
  addTransaction() {
    this.transactionsService.createTransaction(this.newTransaction)
    .subscribe(response => {
      console.log('Transaction added:', response);
    }, error => {
      console.error('Error adding transaction:', error);
    });
  }

  removeTransaction(uid: String) {
    this.transactionsService.deleteTransaction(uid)
    .subscribe(response => {
      console.log('Transaction deleted:', response);
    }, error => {
      console.error('Error deleting transaction:', error);
    });
  }



  filterTransactions() {
    this.filteredTransactionList = [...this.transactionList];
    this.filteredTransactionList.sort((a, b) => {
      return a.credit_card.card_number.toString().localeCompare(b.credit_card.card_number);
    });
    console.log("Filter transactions", this.filteredTransactionList);
    this.transactionList = this.filteredTransactionList;
  }

  formatTimestampToDate(timestamp: number): string {
    return this.transactionsService.formatTimestampToDate(timestamp);
  }
  
}
