export interface Transaction {
  credit_card: {
    card_number: string;
    csc_code: number;
    cardholder_name: string;
    expiration_date_month: number;
    expiration_date_year: number;
    issuer: string;
  };
  uid: string;
  amount: number;
  comment: string;
  date: number;
  currency: string;
}
