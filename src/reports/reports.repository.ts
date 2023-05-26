import { Injectable } from '@nestjs/common';
import { TransactionsService } from '../transactions/transactions.service';
import { BooksOverdueReportModel } from './models/books-overdue.model';
import { BookModel } from '../books/book.model';
import { ExemplarModel } from '../exemplars/exemplar.model';
import { BooksService } from '../books/books.service';
import { BorrowersReportModel } from './models/borrowers-report.model';
import { BorrowersService } from '../borrowers/borrowers.service';

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

  async getAllBooksWithExemplarsId(): Promise<
    Array<BookModel & { exemplars: Pick<ExemplarModel, 'id'>[] }>
  > {
    return (await this.booksService.findMany({
      select: {
        id: true,
        isbn: true,
        title: true,
        author: true,
        publicationYear: true,
        exemplars: {
          select: {
            id: true,
          },
        },
      },
    })) as Array<BookModel & { exemplars: Pick<ExemplarModel, 'id'>[] }>;
  }

  async getBooksWithExemplarsStatus(): Promise<
    Array<BookModel & { exemplars: Pick<ExemplarModel, 'id'>[] }>
  > {
    return (await this.booksService.findMany({
      select: {
        id: true,
        isbn: true,
        title: true,
        author: true,
        publicationYear: true,
        exemplars: {
          select: {
            id: true,
            status: true,
          },
        },
      },
    })) as Array<BookModel & { exemplars: Pick<ExemplarModel, 'id'>[] }>;
  }

  async generateBorrowers(): Promise<BorrowersReportModel[]> {
    return (await this.borrowersService.findMany({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        transactions: {
          select: {
            id: true,
            borrowerId: true,
            exemplarId: true,
            borrowedAt: true,
            returnedAt: true,
            dueToDate: true,
          },
        },
      },
    })) as Array<BorrowersReportModel>;
  }
}
