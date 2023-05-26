import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { TransactionModel } from './transaction.model';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { TransactionsQueryParamsDto } from './dto/transactions-query-params.dto';
import { GenericRepository } from 'src/database/generic-repository';
import { GenericPagination } from 'src/common/generic-pagination.model';
import { TransactionsFindManyParams } from './interace/transactions-find-many-params.interface';

@Injectable()
export class TransactionsRepository
  implements GenericRepository<TransactionModel>
{
  constructor(private readonly prisma: PrismaService) {}

  getById(id: number): Promise<TransactionModel> {
    return this.prisma.transaction.findUniqueOrThrow({ where: { id } });
  }

  async getAll({
    skip,
    take,
    ...where
  }: TransactionsQueryParamsDto): Promise<GenericPagination<TransactionModel>> {
    const total = await this.prisma.transaction.count({ where });
    const data = await this.prisma.transaction.findMany({ skip, take, where });

    return { total, data };
  }

  create(
    data: Omit<TransactionModel, 'id' | 'returnedAt'>,
  ): Promise<TransactionModel> {
    return this.prisma.transaction.create({ data });
  }

  update(id: number, data: UpdateTransactionDto): Promise<TransactionModel> {
    return this.prisma.transaction.update({ data, where: { id } });
  }

  async remove(id: number) {
    await this.prisma.transaction.delete({ where: { id } });
  }

  findMany({ select }: TransactionsFindManyParams) {
    return this.prisma.transaction.findMany({ select });
  }
}
