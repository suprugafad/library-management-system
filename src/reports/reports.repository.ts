import { Injectable } from '@nestjs/common';
import { TransactionsService } from '../transactions/transactions.service';
import { BooksOverdueReportModel } from './models/books-overdue.model';
import { BookModel } from '../books/book.model';
import { ExemplarModel } from '../exemplars/exemplar.model';
import { BooksService } from '../books/books.service';
import { BorrowersReportModel } from './models/borrowers-report.model';
import { BorrowersService } from '../borrowers/borrowers.service';
import { BooksFindManyParams } from 'src/books/interface/books-find-many-params.interface';

const SELECT_ALL_BOOK_FIELDS: BooksFindManyParams['select'] = {
  id: true,
  isbn: true,
  title: true,
  author: true,
  publicationYear: true,
};

@Injectable()
export class ReportsRepository {
  constructor(
    private readonly transactionsService: TransactionsService,
    private readonly booksService: BooksService,
    private readonly borrowersService: BorrowersService,
  ) {}

  async getUnreturnedExemplars(): Promise<BooksOverdueReportModel[]> {
    return this.transactionsService.findMany({
      where: {
        returnedAt: null,
      },
      select: {
        borrower: true,
        exemplar: true,
        borrowedAt: true,
        dueToDate: true,
      },
      include: {
        borrower: true,
        exemplar: true,
      },
    });
  }

  getAllBooksWithExemplarsId(): Promise<
    Array<BookModel & { exemplars: Pick<ExemplarModel, 'id'>[] }>
  > {
    return this.booksService.findMany({
      select: {
        ...SELECT_ALL_BOOK_FIELDS,
        exemplars: {
          select: {
            id: true,
          },
        },
      },
    }) as Promise<
      Array<BookModel & { exemplars: Pick<ExemplarModel, 'id'>[] }>
    >;
  }

  getBooksWithExemplarsStatus(): Promise<
    Array<BookModel & { exemplars: Pick<ExemplarModel, 'id'>[] }>
  > {
    return this.booksService.findMany({
      select: {
        ...SELECT_ALL_BOOK_FIELDS,
        exemplars: {
          select: {
            id: true,
            status: true,
          },
        },
      },
    }) as Promise<
      Array<BookModel & { exemplars: Pick<ExemplarModel, 'id'>[] }>
    >;
  }

  generateBorrowers(): Promise<BorrowersReportModel[]> {
    return this.borrowersService.findMany({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        transactions: true,
      },
    }) as Promise<Array<BorrowersReportModel>>;
  }
}
