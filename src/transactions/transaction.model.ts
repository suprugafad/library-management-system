export class TransactionModel {
  id: number;
  borrowerId: number;
  exemplarId: number;
  borrowedAt: Date;
  returnedAt: Date;
  dueToDate: Date;
}
