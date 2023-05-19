import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Prisma, Book } from '@prisma/client';

@Injectable()
export class BooksRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getById(
    bookWhereUniqueInput: Prisma.BookWhereUniqueInput,
  ): Promise<Book> {
    const book = await this.prisma.book.findUnique({
      where: bookWhereUniqueInput,
    });

    if (!book) {
      throw new NotFoundException();
    }

    return book;
  }

  async getAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.BookWhereUniqueInput;
    where?: Prisma.BookWhereInput;
    orderBy?: Prisma.BookOrderByWithRelationInput;
  }): Promise<Book[]> {
    const { skip, take, cursor, where, orderBy } = params;

    return await this.prisma.book.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  create(data: Prisma.BookCreateInput): Promise<Book> {
    return this.prisma.book.create({
      data,
    });
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
