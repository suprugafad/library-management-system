import { Injectable } from '@nestjs/common';
import { Status } from '@prisma/client';
import { BookStatusReportModel } from '../models/books-status-report.model';
import { ReportsRepository } from '../reports.repository';

@Injectable()
export class BooksStatusReportService {
  constructor(private readonly reportsRepository: ReportsRepository) {}

  async generateBookStatusReport(
    status: Status,
  ): Promise<{ data: BookStatusReportModel[] }> {
    const books = await this.reportsRepository.getBooksWithExemplarsStatus();
    const filterByStatus = this.getFilterFunction(status);

    const bookStatusReports = books.map(({ exemplars, ...restData }) => {
      const exemplarsWithStatus = exemplars.filter(filterByStatus);
      const exemplarIds = exemplarsWithStatus.map((ex) => ex.id);

      return {
        ...restData,
        exemplarIds,
      };
    });

    return { data: bookStatusReports };
  }

  private getFilterFunction(status: Status) {
    return (exemplar) => exemplar.status === status;
  }
}
