import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BooksRepository } from './books.repository';
import { BooksQueryParamsDto } from './dto/books-query-params.dto';

@Injectable()
export class BooksService {
  constructor(private readonly booksRepository: BooksRepository) {}
  create(createBookDto: CreateBookDto) {
    return this.booksRepository.create(createBookDto);
  }

  getAll(booksQueryParams: BooksQueryParamsDto) {
    return this.booksRepository.getAll(booksQueryParams);
  }

  getOne(id: number) {
    return this.booksRepository.getById({ id });
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.booksRepository.update({ where: { id }, data: updateBookDto });
  }

  remove(id: number) {
    return this.booksRepository.remove({ id });
  }
}
