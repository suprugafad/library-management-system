import { Injectable } from '@nestjs/common';
import { BooksService } from 'src/books/books.service';

@Injectable()
export class BooksReportService {
  constructor(private readonly booksService: BooksService) {}

  async generateBooksReport() {
    return this.booksService.findMany({
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
  }
}
