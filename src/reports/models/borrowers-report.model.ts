import { BorrowerModel } from '../../borrowers/borrower.model';
import { TransactionModel } from '../../transactions/transaction.model';

export class BorrowersReportModel {
  borrower: BorrowerModel;
  transactions: TransactionModel[];
}
