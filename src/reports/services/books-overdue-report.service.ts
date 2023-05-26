import { Injectable } from '@nestjs/common';
import { BooksOverdueReportModel } from '../models/books-overdue.model';
import { ReportsRepository } from '../reports.repository';

@Injectable()
export class BooksOverdueReportService {
  constructor(private readonly reportsRepository: ReportsRepository) {}

  async generateOverdueBooksReport(): Promise<{
    data: BooksOverdueReportModel[];
  }> {
    const allOpenTransactions =
      await this.reportsRepository.getUnreturnedExemplars();

    const overdueBooks = allOpenTransactions.filter((transaction) => {
      const now = new Date();
      const dueToDate = new Date(transaction.dueToDate);
      return dueToDate < now;
    });

    return { data: overdueBooks };
  }
}
