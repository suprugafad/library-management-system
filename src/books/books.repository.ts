import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { GenericRepository } from 'src/database/generic-repository';
import { BooksModel } from './books.model';
import { UpdateBookDto } from './dto/update-book.dto';
import { CreateBookDto } from './dto/create-book.dto';
import { BooksQueryParamsDto } from './dto/books-query-params.dto';

@Injectable()
export class BooksRepository implements GenericRepository<BooksModel> {
  constructor(private readonly prisma: PrismaService) {}

  getById(id: number): Promise<BooksModel> {
    return this.prisma.book.findUniqueOrThrow({ where: { id } });
  }

  getAll({ skip, take, ...where }: BooksQueryParamsDto): Promise<BooksModel[]> {
    return this.prisma.book.findMany({ skip, take, where });
  }

  async create(data: CreateBookDto): Promise<BooksModel> {
    return this.prisma.book.create({ data });
  }

  update(id: number, data: UpdateBookDto): Promise<BooksModel> {
    return this.prisma.book.update({ data, where: { id } });
  }

  async remove(id: number) {
    await this.prisma.book.delete({ where: { id } });
  }
}
