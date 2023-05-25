import { Injectable } from '@nestjs/common';
import { BooksService } from 'src/books/books.service';
import { ExemplarModel } from '../../exemplars/exemplar.model';
import { BooksReportModel } from '../models/books-report.model';
import { BookModel } from '../../books/book.model';

@Injectable()
export class BooksReportService {
  constructor(private readonly booksService: BooksService) {}

  async generateBooksReport(): Promise<BooksReportModel[]> {
    const books = (await this.booksService.findMany({
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
    })) as Array<BookModel & { exemplars: Pick<ExemplarModel, 'id'>[] }>;

    return books.map(({ exemplars, ...restData }) => ({
      ...restData,
      totalExemplars: exemplars.length,
    }));
  }
}
