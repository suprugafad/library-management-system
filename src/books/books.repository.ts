import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { GenericRepository } from 'src/database/generic-repository';
import { BookModel } from './book.model';
import { UpdateBookDto } from './dto/update-book.dto';
import { CreateBookDto } from './dto/create-book.dto';
import { BooksQueryParamsDto } from './dto/books-query-params.dto';
import { GenericPagination } from 'src/common/generic-pagination.model';

@Injectable()
export class BooksRepository implements GenericRepository<BookModel> {
  constructor(private readonly prisma: PrismaService) {}

  getById(id: number): Promise<BookModel> {
    return this.prisma.book.findUniqueOrThrow({ where: { id } });
  }

  async getAll({
    skip,
    take,
    ...where
  }: BooksQueryParamsDto): Promise<GenericPagination<BookModel>> {
    const total = await this.prisma.book.count();
    const data = await this.prisma.book.findMany({ skip, take, where });

    return { total, data };
  }

  async create(data: CreateBookDto): Promise<BookModel> {
    return this.prisma.book.create({ data });
  }

  update(id: number, data: UpdateBookDto): Promise<BookModel> {
    return this.prisma.book.update({ data, where: { id } });
  }

  async remove(id: number) {
    await this.prisma.book.delete({ where: { id } });
  }
}
