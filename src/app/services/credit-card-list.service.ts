import { Injectable } from '@angular/core';
import { CardInfo } from '../models/creditcard-model';
import { Transaction } from '../models/transaction-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HomescreenComponent } from '../components/homescreen/homescreen.component';

@Injectable({
  providedIn: 'root'
})
export class CreditCardListService {
  constructor(private http: HttpClient,) { }

  transactions: Transaction[] = [];
  creditCards: CardInfo[] = [];


  getAllCreditCard(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http.get<any>(`http://localhost:3000/cards`)
        .subscribe(
          response => {
            console.log(response);
            this.creditCards = response;
            resolve(response);
          },
          error => {
            console.error('Failed to get transactions:', error);
            reject(error);
          }
        );
    });
  }

  getCreditCardByNumber(cardNumber: string): CardInfo | undefined {
    return this.creditCards.find(card => card.card_number.toString() === cardNumber);
  }

  createCreditCard(cardInfo: CardInfo): Observable<any> {
    const url = `http://localhost:3000/cards`;
    console.log("createCreditCard called", cardInfo);
    return this.http.post(url, cardInfo);
  }

  deleteCreditCard(cardNumber: number): Observable<any> {
    const url = `http://localhost:3000/cards/${cardNumber}`;
    console.log("createCreditCard called", cardNumber);
    return this.http.delete(url);
  }
}
