import { Injectable } from '@nestjs/common';
import { ExemplarStatus } from 'src/exemplars/enum/exemplar-status.enum';
import { BooksReportService } from './services/books-report.service';
import { BooksReportModel } from './models/books-report.model';
import { BooksStatusReportService } from './services/books-status-report.service';
import { BorrowersReportService } from './services/borrowers-report.service';
import { BooksOverdueReportService } from './services/books-overdue-report.service';
import { BooksOverdueReportModel } from './models/books-overdue.model';
import { BorrowersReportModel } from './models/borrowers-report.model';
import { BookStatusReportModel } from './models/books-status-report.model';

@Injectable()
export class ReportsService {
  constructor(
    private readonly booksReportService: BooksReportService,
    private readonly bookStatusReportService: BooksStatusReportService,
    private readonly borrowersReportService: BorrowersReportService,
    private readonly booksOverdueReportService: BooksOverdueReportService,
  ) {}

  generateBooksReport(): Promise<{ data: BooksReportModel[] }> {
    return this.booksReportService.generateBooksReport();
  }

  generateBorrowedExemplarsReport(): Promise<{
    data: BookStatusReportModel[];
  }> {
    return this.bookStatusReportService.generateBookStatusReport(
      ExemplarStatus.Borrowed,
    );
  }

  generateAvailableExemplarsReport(): Promise<{
    data: BookStatusReportModel[];
  }> {
    return this.bookStatusReportService.generateBookStatusReport(
      ExemplarStatus.Available,
    );
  }

  generateBorrowersReport(): Promise<{ data: BorrowersReportModel[] }> {
    return this.borrowersReportService.generateBorrowersReport();
  }

  generateOverdueReport(): Promise<{ data: BooksOverdueReportModel[] }> {
    return this.booksOverdueReportService.generateOverdueBooksReport();
  }
}
