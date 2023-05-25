import { ExemplarModel } from '../../exemplars/exemplar.model';
import { BorrowerModel } from '../../borrowers/borrower.model';

export class BooksOverdueReportModel {
  exemplar?: ExemplarModel;
  borrower?: BorrowerModel;
}
