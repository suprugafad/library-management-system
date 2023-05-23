import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { Borrower, Prisma } from '@prisma/client';
import { BorrowerResponseDto } from './dto/borrowers-response.dto';

@Injectable()
export class BorrowersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getById(
    borrowerWhereUniqueInput: Prisma.BorrowerWhereUniqueInput,
  ): Promise<BorrowerResponseDto> {
    const borrower = await this.prisma.borrower.findUnique({
      where: borrowerWhereUniqueInput,
    });

    if (!borrower) {
      throw new NotFoundException();
    }

    return borrower;
  }

  async getAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.BorrowerWhereUniqueInput;
    where?: Prisma.BorrowerWhereInput;
    orderBy?: Prisma.BorrowerOrderByWithRelationInput;
  }): Promise<BorrowerResponseDto[]> {
    const { skip, take, cursor, where, orderBy } = params;

    return this.prisma.borrower.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(data: Prisma.BorrowerCreateInput): Promise<BorrowerResponseDto> {
    return this.prisma.borrower.create({
      data,
    });
  }

  update(params: {
    where: Prisma.BorrowerWhereUniqueInput;
    data: Prisma.BorrowerUpdateInput;
  }): Promise<Borrower> {
    const { where, data } = params;

    return this.prisma.borrower.update({
      data,
      where,
    });
  }

  remove(where: Prisma.BorrowerWhereUniqueInput) {
    return this.prisma.borrower.delete({
      where,
    });
  }
}
