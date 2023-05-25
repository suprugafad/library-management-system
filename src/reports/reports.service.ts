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

  async generateBooksReport(): Promise<BooksReportModel[]> {
    return this.booksReportService.generateBooksReport();
  }

  async generateBorrowedExemplarsReport() {
    return this.bookStatusReportService.generateBookStatusReport(
      ExemplarStatus.Borrowed,
    );
  }

  async generateAvailableExemplarsReport() {
    return this.bookStatusReportService.generateBookStatusReport(
      ExemplarStatus.Available,
    );
  }

  async generateBorrowersReport() {
    return this.borrowersReportService.generateBorrowersReport();
  }

  async generateOverdueReport() {
    return this.booksOverdueReportService.generateOverdueBooksReport();
  }
}
