import { BookModel } from '../../books/book.model';

export class BookStatusReportModel {
  book: BookModel;
  exemplarIds: number[];
}
