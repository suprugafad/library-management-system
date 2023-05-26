import { Controller, Get } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { BooksReportModel } from './models/books-report.model';
import { BooksOverdueReportModel } from './models/books-overdue.model';
import { BorrowersReportModel } from './models/borrowers-report.model';
import { BookStatusReportModel } from './models/books-status-report.model';
import { ApiTags } from '@nestjs/swagger';
import { GetReportResponse } from 'src/decorators/app-api.decorators';
import { BooksReportResponse } from './dto/books-report-response.dto';
import { BooksStatusReportResponse } from './dto/books-status-report-response.dto';
import { BorrowersReportResponse } from './dto/borrowers-report-response.dto';
import { OverdueReportResponse } from './dto/overdue-report-response.dto';

@ApiTags('reports')
@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @GetReportResponse({ type: BooksReportResponse })
  @Get('books')
  getBookReport(): Promise<{ data: BooksReportModel[] }> {
    return this.reportsService.generateBooksReport();
  }

  @GetReportResponse({ type: BooksStatusReportResponse })
  @Get('borrowed')
  getBorrowedExemplarsReport(): Promise<{ data: BookStatusReportModel[] }> {
    return this.reportsService.generateBorrowedExemplarsReport();
  }

  @GetReportResponse({ type: BooksStatusReportResponse })
  @Get('available')
  getAvailableExemplarsReport(): Promise<{ data: BookStatusReportModel[] }> {
    return this.reportsService.generateAvailableExemplarsReport();
  }

  @GetReportResponse({ type: BorrowersReportResponse })
  @Get('borrowers')
  getBorrowerReport(): Promise<{ data: BorrowersReportModel[] }> {
    return this.reportsService.generateBorrowersReport();
  }

  @GetReportResponse({ type: OverdueReportResponse })
  @Get('overdue')
  getOverdueBooksReport(): Promise<{ data: BooksOverdueReportModel[] }> {
    return this.reportsService.generateOverdueReport();
  }
}
