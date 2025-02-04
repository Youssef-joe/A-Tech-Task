export interface NumberDetails {
  id: string;
  name: string;
  country: string;
  status: string;
  currentBalance: number;
  availableBalance: number;
  usedBalance: number;
}

export interface Transaction {
  id: number;
  description: string;
  amount: number;
  quantity: number;
  total: number;
  startDate: string;
  endDate: string;
  company: string;
}


