import { BorrowerModel } from '../../borrowers/borrower.model';
import { TransactionModel } from '../../transactions/transaction.model';

export class BorrowersReportModel extends BorrowerModel {
  transactions: TransactionModel[];
}
