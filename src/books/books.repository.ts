import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Prisma, Book } from '@prisma/client';
import { transformBookYear } from './util/transformBookYear';
import { BookResponseDto } from './dto/book-response.dto';

@Injectable()
export class BooksRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getById(
    bookWhereUniqueInput: Prisma.BookWhereUniqueInput,
  ): Promise<BookResponseDto> {
    const book = await this.prisma.book.findUnique({
      where: bookWhereUniqueInput,
    });

    if (!book) {
      throw new NotFoundException();
    }

    return transformBookYear(book);
  }

  async getAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.BookWhereUniqueInput;
    where?: Prisma.BookWhereInput;
    orderBy?: Prisma.BookOrderByWithRelationInput;
  }): Promise<BookResponseDto[]> {
    const { skip, take, cursor, where, orderBy } = params;

    const books = await this.prisma.book.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });

    return books.map(transformBookYear);
  }

  async create(data: Prisma.BookCreateInput): Promise<BookResponseDto> {
    const book = await this.prisma.book.create({
      data,
    });

    return transformBookYear(book);
  }

  update(params: {
    where: Prisma.BookWhereUniqueInput;
    data: Prisma.BookUpdateInput;
  }): Promise<Book> {
    const { where, data } = params;

    return this.prisma.book.update({
      data,
      where,
    });
  }

  remove(where: Prisma.BookWhereUniqueInput) {
    return this.prisma.book.delete({
      where,
    });
  }
}
