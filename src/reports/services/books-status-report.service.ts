import { Injectable } from '@nestjs/common';
import { BooksService } from 'src/books/books.service';
import { Status } from '@prisma/client';
import { BookStatusReportModel } from '../models/books-status-report.model';
import { BookModel } from '../../books/book.model';
import { ExemplarModel } from '../../exemplars/exemplar.model';

@Injectable()
export class BooksStatusReportService {
  constructor(private readonly booksService: BooksService) {}

  async generateBookStatusReport(
    status: Status,
  ): Promise<BookStatusReportModel[]> {
    const books = await this.getBooks();
    const filterByStatus = this.getFilterFunction(status);

    return books.map(({ exemplars, ...restData }) => {
      const exemplarsWithStatus = exemplars.filter(filterByStatus);
      const exemplarIds = exemplarsWithStatus.map((ex) => ex.id);

      return {
        ...restData,
        exemplarIds,
      };
    });
  }

  private async getBooks() {
    return (await this.booksService.findMany({
      select: {
        id: true,
        isbn: true,
        title: true,
        author: true,
        publicationYear: true,
        exemplars: {
          select: {
            id: true,
            status: true,
          },
        },
      },
    })) as Array<BookModel & { exemplars: Pick<ExemplarModel, 'id'>[] }>;
  }

  private getFilterFunction(status: Status) {
    return (exemplar) => exemplar.status === status;
  }
}
