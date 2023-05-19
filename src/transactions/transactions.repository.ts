import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Prisma, Transaction } from '@prisma/client';

@Injectable()
export class TransactionsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getById(
    transactionWhereUniqueInput: Prisma.TransactionWhereUniqueInput,
  ): Promise<Transaction> {
    const transaction = await this.prisma.Transaction.findUnique({
      where: transactionWhereUniqueInput,
    });

    if (!transaction) {
      throw new NotFoundException();
    }

    return transaction;
  }

  async getAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.TransactionWhereUniqueInput;
    where?: Prisma.TransactionWhereInput;
    orderBy?: Prisma.TransactionOrderByWithRelationInput;
  }): Promise<Transaction[]> {
    const { skip, take, cursor, where, orderBy } = params;

    return await this.prisma.transaction.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  create(data: Prisma.TransactionCreateInput): Promise<Transaction> {
    return this.prisma.transaction.create({
      data,
    });
  }

  update(params: {
    where: Prisma.TransactionWhereUniqueInput;
    data: Prisma.TransactionUpdateInput;
  }): Promise<Transaction> {
    const { where, data } = params;

    return this.prisma.transaction.update({
      data,
      where,
    });
  }

  remove(where: Prisma.TransactionWhereUniqueInput) {
    return this.prisma.transaction.delete({
      where,
    });
  }
}
