import { Injectable } from '@nestjs/common';
import { BooksService } from 'src/books/books.service';
import { ExemplarsService } from 'src/exemplars/exemplars.service';

@Injectable()
export class BooksReportService {
  constructor(
    private readonly booksService: BooksService,
    private readonly exemplarsService: ExemplarsService,
  ) {}

  async generateBooksReport() {
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
          },
        },
      },
    });

    return books.map(({ exemplars, ...restData }) => ({
      ...restData,
      totalExemplars: exemplars.length,
    }));
  }
}
