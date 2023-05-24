import { Controller, Get } from "@nestjs/common";
import { ReportsService } from './reports.service';
import { CreateBookReportDto } from "./dto/create-book-report.dto";
import { CreateBorrowerReportDto } from "./dto/create-borrower-report.dto";
import { CreateBorrowedExemplarReportDto } from "./dto/create-borrowed-exemplar-report.dto";

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('books')
  getBookReport(): Promise<CreateBookReportDto[]> {
    return this.reportsService.generateBookReport();
  }

  @Get('borrowed')
  getBorrowedExemplarsReport(): Promise<CreateBookReportDto[]> {
    return this.reportsService.generateBorrowedExemplarsReport();
  }

  @Get('available')
  getAvailableExemplarsReport(): Promise<CreateBookReportDto[]> {
    return this.reportsService.generateAvailableExemplarsReport();
  }

  @Get('borrowers')
  getBorrowerReport(): Promise<CreateBorrowerReportDto[]> {
    return this.reportsService.generateBorrowerReport();
  }

  @Get('overdue')
  getOverdueBooksReport(): Promise<CreateBorrowedExemplarReportDto[]> {
    return this.reportsService.generateOverdueBooksReport();
  }
}
