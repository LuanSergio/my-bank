interface ICustomer {
  id: number;
  name: string;
  date: string;
  document: string;
  bank: {
    bankName: string;
    code: string;
    agency: string;
    account: string;
  };
}
