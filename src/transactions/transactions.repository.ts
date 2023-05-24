import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { TransactionModel } from './transaction.model';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { TransactionsQueryParamsDto } from './dto/transactions-query-params.dto';

@Injectable()
export class TransactionsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getById(id: number): Promise<TransactionModel> {
    return this.prisma.transaction.findUnique({ where: { id } });
  }

  async getAll({
    skip,
    take,
    ...where
  }: TransactionsQueryParamsDto): Promise<TransactionModel[]> {
    return await this.prisma.transaction.findMany({ skip, take, where });
  }

  create(
    data: Omit<TransactionModel, 'id' | 'returnedAt'>,
  ): Promise<TransactionModel> {
    return this.prisma.transaction.create({ data });
  }

  update(id: number, data: UpdateTransactionDto): Promise<TransactionModel> {
    return this.prisma.transaction.update({ data, where: { id } });
  }

  remove(id: number) {
    return this.prisma.transaction.delete({ where: { id } });
  }
}
