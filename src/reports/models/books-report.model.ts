import { BookModel } from '../../books/book.model';
import { ExemplarModel } from '../../exemplars/exemplar.model';

export class BooksReportModel {
  book?: BookModel;
  exemplars?: ExemplarModel[];
  totalExemplars?: number;
}
