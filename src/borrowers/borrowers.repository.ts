import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { GenericRepository } from 'src/database/generic-repository';
import { BorrowerModel } from './borrower.model';
import { BorrowersQueryParamsDto } from './dto/borrowers-query-params.dto';
import { CreateBorrowerDto } from './dto/create-borrower.dto';
import { UpdateBorrowerDto } from './dto/update-borrower.dto';

@Injectable()
export class BorrowersRepository implements GenericRepository<BorrowerModel> {
  constructor(private readonly prisma: PrismaService) {}

  getById(id: number): Promise<BorrowerModel> {
    return this.prisma.borrower.findUniqueOrThrow({ where: { id } });
  }

  getAll({
    skip,
    take,
    ...where
  }: BorrowersQueryParamsDto): Promise<BorrowerModel[]> {
    return this.prisma.borrower.findMany({ skip, take, where });
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
