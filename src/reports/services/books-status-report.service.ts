import { Injectable } from '@nestjs/common';
import { BooksService } from 'src/books/books.service';
import { Status } from '@prisma/client';

@Injectable()
export class BooksStatusReportService {
  constructor(private readonly booksService: BooksService) {}

  async generateBookStatusReport(status: Status) {
    const books = await this.booksService.findMany({
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
    });

    return books.map(({ exemplars, ...restData }) => {
      const exemplarsWithStatus = exemplars.filter(
        (ex) => ex.status === status,
      );
      const exemplarIds = exemplarsWithStatus.map((ex) => ex.id);

      return {
        ...restData,
        exemplarIds,
      };
    });
  }
}
