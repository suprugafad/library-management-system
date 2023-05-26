import { Controller, Get } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { BooksReportModel } from './models/books-report.model';
import { BooksOverdueReportModel } from './models/books-overdue.model';
import { BorrowersReportModel } from './models/borrowers-report.model';
import { BookStatusReportModel } from './models/books-status-report.model';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('reports')
@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('books')
  getBookReport(): Promise<{ data: BooksReportModel[] }> {
    return this.reportsService.generateBooksReport();
  }

  @Get('borrowed')
  getBorrowedExemplarsReport(): Promise<{ data: BookStatusReportModel[] }> {
    return this.reportsService.generateBorrowedExemplarsReport();
  }

  @Get('available')
  getAvailableExemplarsReport(): Promise<{ data: BookStatusReportModel[] }> {
    return this.reportsService.generateAvailableExemplarsReport();
  }

  @Get('borrowers')
  getBorrowerReport(): Promise<{ data: BorrowersReportModel[] }> {
    return this.reportsService.generateBorrowersReport();
  }

  @Get('overdue')
  getOverdueBooksReport(): Promise<{ data: BooksOverdueReportModel[] }> {
    return this.reportsService.generateOverdueReport();
  }
}
