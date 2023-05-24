import { BookModel } from 'src/books/book.model';
import { ExemplarStatus } from '../enum/exemplar-status.enum';

export interface ExemplarFindManyParams {
  bookId?: BookModel['id'];
  status?: ExemplarStatus;
}
