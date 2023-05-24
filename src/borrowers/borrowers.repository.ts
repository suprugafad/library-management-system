import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { GenericRepository } from 'src/database/generic-repository';
import { BorrowerModel } from './borrower.model';
import { BorrowersQueryParamsDto } from './dto/borrowers-query-params.dto';
import { CreateBorrowerDto } from './dto/create-borrower.dto';
import { UpdateBorrowerDto } from './dto/update-borrower.dto';
import { GenericPagination } from 'src/common/generic-pagination.model';

@Injectable()
export class BorrowersRepository implements GenericRepository<BorrowerModel> {
  constructor(private readonly prisma: PrismaService) {}

  getById(id: number): Promise<BorrowerModel> {
    return this.prisma.borrower.findUniqueOrThrow({ where: { id } });
  }

  async getAll({
    skip,
    take,
    ...where
  }: BorrowersQueryParamsDto): Promise<GenericPagination<BorrowerModel>> {
    const total = await this.prisma.borrower.count();
    const data = await this.prisma.borrower.findMany({ skip, take, where });

    return { total, data };
  }

  create(data: CreateBorrowerDto): Promise<BorrowerModel> {
    return this.prisma.borrower.create({ data });
  }

  update(id: number, data: UpdateBorrowerDto): Promise<BorrowerModel> {
    return this.prisma.borrower.update({ data, where: { id } });
  }

  async remove(id: number) {
    await this.prisma.borrower.delete({ where: { id } });
  }
}
