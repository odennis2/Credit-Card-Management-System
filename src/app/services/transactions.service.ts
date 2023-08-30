import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction-model';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  private apiUrl = "http://localhost:3000"

  constructor(private http: HttpClient) { }



  getAllTransactions(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http.get<any>(`${this.apiUrl}/transactions`)
        .subscribe(
          response => {
            resolve(response);
          },
          error => {
            console.error('Failed to get transactions:', error);
            reject(error);
          }
        );
    });
  }
  //http://localhost:3000/transactions
  createTransaction(transaction: Transaction): Observable<any> {
    const url = `http://localhost:3000/transactions`;
    console.log("createTransaction called", transaction);
    return this.http.post(url, transaction);
  }

  deleteTransaction(uid: String): Observable<any> {
    const url = `http://localhost:3000/transactions/${uid}`;
    console.log("deleteTransaction called", uid);
    return this.http.delete(url);
  }

  formatTimestampToDate(timestamp: number): string {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
  }



  
}
