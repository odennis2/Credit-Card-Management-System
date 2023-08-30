import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'expirationDate'
})
export class ExpirationDatePipe implements PipeTransform {
  transform(cardInfo: { expiration_date_month: number, expiration_date_year: number }): string {
    if (cardInfo && typeof cardInfo.expiration_date_month === 'number' && typeof cardInfo.expiration_date_year === 'number') {
      return `${cardInfo.expiration_date_month}/${cardInfo.expiration_date_year}`;
    }
    return 'N/A';
  }
}
