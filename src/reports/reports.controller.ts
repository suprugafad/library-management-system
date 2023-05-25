import { Controller, Get } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { BooksReportModel } from './models/books-report.model';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('books')
  getBookReport(): Promise<BooksReportModel[]> {
    return this.reportsService.generateBooksReport();
  }

  @Get('borrowed')
  getBorrowedExemplarsReport() {
    return this.reportsService.generateBorrowedExemplarsReport();
  }

  @Get('available')
  getAvailableExemplarsReport() {
    return this.reportsService.generateAvailableExemplarsReport();
  }

  @Get('borrowers')
  getBorrowerReport() {
    return this.reportsService.generateBorrowersReport();
  }

  @Get('overdue')
  getOverdueBooksReport() {
    return this.reportsService.generateOverdueReport();
  }
}
