import { Injectable } from '@nestjs/common';
import { CreateBookReportDto } from './dto/create-book-report.dto';
import { CreateBorrowerReportDto } from './dto/create-borrower-report.dto';
import { CreateBorrowedExemplarReportDto } from './dto/create-borrowed-exemplar-report.dto';
import { BooksService } from 'src/books/books.service';
import { ExemplarsService } from 'src/exemplars/exemplars.service';
import { TransactionsService } from 'src/transactions/transactions.service';
import { BorrowersService } from 'src/borrowers/borrowers.service';
import { ExemplarModel } from 'src/exemplars/exemplar.model';
import { BookModel } from 'src/books/book.model';
import { ExemplarStatus } from 'src/exemplars/enum/exemplar-status.enum';
import { BooksReportService } from './books-report.service';

@Injectable()
export class ReportsService {
  constructor(
    private readonly booksReportService: BooksReportService,
    private readonly booksService: BooksService,
    private readonly exemplarService: ExemplarsService,
    private readonly transactionsService: TransactionsService,
    private readonly borrowersService: BorrowersService,
  ) {}

  // TODO: REMOVE UNUSED CODE

  async generateBookReport() {
    return this.booksReportService.generateBooksReport();
    // return this.generateExemplarsReport(() => true);
  }

  async generateBorrowedExemplarsReport(): Promise<CreateBookReportDto[]> {
    return this.generateExemplarsReport(
      (exemplar) => exemplar.status === ExemplarStatus.Borrowed,
    );
  }

  async generateAvailableExemplarsReport(): Promise<CreateBookReportDto[]> {
    return this.generateExemplarsReport(
      (exemplar) => exemplar.status === ExemplarStatus.Available,
    );
  }

  private getAllBooks() {
    return this.booksService.getAll({
      skip: 0,
      take: null,
    });
  }

  private async generateExemplarsReport(
    exemplarFilter: (exemplar: ExemplarModel) => boolean,
  ): Promise<CreateBookReportDto[]> {
    const { data: books } = await this.getAllBooks();

    const populateBookWithExemplars = async (book: BookModel) => {
      const allExemplars = await this.exemplarService.findMany({
        bookId: book.id,
      });

      const exemplars = allExemplars.filter(exemplarFilter);

      return { ...book, exemplars };
    };

    return Promise.all(books.map(populateBookWithExemplars));
  }

  async generateBorrowerReport(): Promise<CreateBorrowerReportDto[]> {
    const { data: borrowers } = await this.borrowersService.getAll({
      skip: 0,
      take: undefined,
    });

    return Promise.all(
      borrowers.map(async (borrower) => {
        const { data: transactions } = await this.transactionsService.getAll({
          skip: 0,
          take: undefined,
          borrowerId: borrower.id,
        });

        return {
          id: borrower.id,
          firstName: borrower.firstName,
          lastName: borrower.lastName,
          email: borrower.email,
          transactions: transactions,
        };
      }),
    );
  }

  async generateOverdueBooksReport(): Promise<
    CreateBorrowedExemplarReportDto[]
  > {
    const now = new Date();
    const { data: transactions } = await this.transactionsService.getAll({
      skip: 0,
      take: undefined,
    });

    const overdueTransactions = transactions.filter((transaction) => {
      return transaction.returnedAt === null && transaction.dueToDate <= now;
    });

    return Promise.all(
      overdueTransactions.map(
        async ({ exemplarId, borrowerId, borrowedAt, dueToDate }) => {
          const exemplar = await this.exemplarService.getOne(exemplarId);
          const borrower = await this.borrowersService.getOne(borrowerId);

          return { exemplar, borrower, borrowedAt, dueToDate };
        },
      ),
    );
  }
}
