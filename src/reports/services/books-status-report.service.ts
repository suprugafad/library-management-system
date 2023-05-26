import { Injectable } from '@nestjs/common';
import { ReportsRepository } from '../reports.repository';
import { TExemplarStatus } from 'src/exemplars/interface/exemplar-status.interface';
import { ExemplarModel } from 'src/exemplars/exemplar.model';
import { BooksStatusReportItem } from '../dto/books-status-report-response.dto';

@Injectable()
export class BooksStatusReportService {
  constructor(private readonly reportsRepository: ReportsRepository) {}

  async generateBookStatusReport(status: TExemplarStatus) {
    const booksWithExemplars =
      await this.reportsRepository.getBooksWithExemplarsStatus();

    const result = booksWithExemplars.reduce((acc, { exemplars, ...book }) => {
      if (!exemplars.length) return acc;

      const exemplarsIds: number[] = exemplars
        .filter(this.getFilterFunction(status))
        .map(({ id }) => id);

      if (!exemplarsIds.length) return acc;

      acc.push({ ...book, exemplarsIds });
      return acc;
    }, [] as BooksStatusReportItem[]);

    return { data: [...result] };
  }

  private getFilterFunction(status: TExemplarStatus) {
    return (exemplar: ExemplarModel) => exemplar.status === status;
  }
}
