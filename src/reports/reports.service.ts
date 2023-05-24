import { Injectable } from '@nestjs/common';
import { BooksRepository } from '../books/books.repository';
import { ExemplarsRepository } from '../exemplars/exemplar.repository';
import { TransactionsRepository } from '../transactions/transactions.repository';
import { BorrowersRepository } from '../borrowers/borrowers.repository';
import { CreateBookReportDto } from './dto/create-book-report.dto';
import { Exemplar } from "@prisma/client";
import { CreateBorrowerReportDto } from "./dto/create-borrower-report.dto";
import { CreateBorrowedExemplarReportDto } from "./dto/create-borrowed-exemplar-report.dto";

@Injectable()
export class ReportsService {
  constructor(
    private readonly booksRepository: BooksRepository,
    private readonly exemplarsRepository: ExemplarsRepository,
    private readonly transactionsRepository: TransactionsRepository,
    private readonly borrowersRepository: BorrowersRepository,
  ) {}

  async generateBookReport(): Promise<CreateBookReportDto[]> {
    return this.generateExemplarsReport(() => true);
  }

  async generateBorrowedExemplarsReport(): Promise<CreateBookReportDto[]> {
    return this.generateExemplarsReport(exemplar => exemplar.status === 'Borrowed');
  }

  async generateAvailableExemplarsReport(): Promise<CreateBookReportDto[]> {
    return this.generateExemplarsReport(exemplar => exemplar.status === 'Available');
  }

  private async generateExemplarsReport(
    exemplarFilter: (exemplar: Exemplar) => boolean
  ): Promise<CreateBookReportDto[]> {
    const books = await this.booksRepository.getAll({skip: 0, take: undefined});

    return Promise.all(books.map(async book => {
      const exemplars = await this.exemplarsRepository.getAll({ skip: 0, take: undefined, bookId: book.id });
      const filteredExemplars = exemplars.filter(exemplarFilter);

      return {
        id: book.id,
        isbn: book.isbn,
        title: book.title,
        author: book.author,
        publicationYear: book.publicationYear,
        exemplars: filteredExemplars,
      };
    }));
  }

  async generateBorrowerReport(): Promise<CreateBorrowerReportDto[]> {
    const borrowers = await this.borrowersRepository.getAll({skip: 0, take: undefined});

    return Promise.all(borrowers.map(async borrower => {
      const transactions = await this.transactionsRepository.getAll({ skip: 0, take: undefined, borrowerId: borrower.id });

      return {
        id: borrower.id,
        firstName: borrower.firstName,
        lastName: borrower.lastName,
        email: borrower.email,
        transactions: transactions,
      };
    }));
  }

  async generateOverdueBooksReport(): Promise<CreateBorrowedExemplarReportDto[]> {
    const now = new Date();
    const allTransactions = await this.transactionsRepository.getAll({ skip: 0, take: undefined });

    const overdueTransactions = allTransactions.filter(transaction => {
      return transaction.returnedAt === null && transaction.dueToDate <= now;
    });

    return Promise.all(overdueTransactions.map(async transaction => {
      const exemplar = await this.exemplarsRepository.getById(transaction.exemplarId);
      const borrower = await this.borrowersRepository.getById(transaction.borrowerId);

      return {
        exemplar: exemplar,
        borrower: borrower,
        borrowedAt: transaction.borrowedAt,
        dueToDate: transaction.dueToDate
      };
    }));
  }
}
