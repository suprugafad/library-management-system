import { Injectable } from '@nestjs/common';
import { BooksReportModel } from '../models/books-report.model';
import { ReportsRepository } from '../reports.repository';

@Injectable()
export class BooksReportService {
  constructor(private readonly reportsRepository: ReportsRepository) {}

  async generateBooksReport(): Promise<{ data: BooksReportModel[] }> {
    const books = await this.reportsRepository.getAllBooksWithExemplarsId();

    const bookReports = books.map(({ exemplars, ...restData }) => ({
      ...restData,
      totalExemplars: exemplars.length,
    }));

    return { data: bookReports };
  }
}
