import { Injectable } from '@nestjs/common';
import { ExemplarStatus } from 'src/exemplars/enum/exemplar-status.enum';
import { BooksReportService } from './services/books-report.service';
import { BooksReportModel } from './models/books-report.model';
import { BooksStatusReportService } from './services/books-status-report.service';
import { BorrowersReportService } from './services/borrowers-report.service';
import { BooksOverdueReportService } from './services/books-overdue-report.service';

@Injectable()
export class ReportsService {
  constructor(
    private readonly booksReportService: BooksReportService,
    private readonly bookStatusReportService: BooksStatusReportService,
    private readonly borrowersReportService: BorrowersReportService,
    private readonly booksOverdueReportService: BooksOverdueReportService,
  ) {}

  generateBooksReport(): Promise<BooksReportModel[]> {
    return this.booksReportService.generateBooksReport();
  }

  generateBorrowedExemplarsReport() {
    return this.bookStatusReportService.generateBookStatusReport(
      ExemplarStatus.Borrowed,
    );
  }

  generateAvailableExemplarsReport() {
    return this.bookStatusReportService.generateBookStatusReport(
      ExemplarStatus.Available,
    );
  }

  generateBorrowersReport() {
    return this.borrowersReportService.generateBorrowersReport();
  }

  generateOverdueReport() {
    return this.booksOverdueReportService.generateOverdueBooksReport();
  }
}
