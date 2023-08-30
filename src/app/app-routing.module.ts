import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomescreenComponent } from './components/homescreen/homescreen.component';
import { AddCreditCardComponent } from './components/add-credit-card/add-credit-card.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { CreditCardDetailsComponent } from './components/credit-card-details/credit-card-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomescreenComponent },
  { path: 'creditcard', component: AddCreditCardComponent },
  { path: 'transaction', component: TransactionsComponent },
  { path: 'credit-card-details/:cardNumber', loadChildren: () => import('./components/credit-card-details/credit-card-details.module').then(m => m.CreditCardDetailsModule) }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
