import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBorrowerDto, UpdateBorrowerDto, BorrowBookDto } from './dto';


@Injectable()
export class BorrowersService {
  constructor(private prisma: PrismaService) {}

  async create(createBorrowerDto: CreateBorrowerDto) {
    return this.prisma.borrower.create({ data: createBorrowerDto });
  }

  async findAll() {
    return this.prisma.borrower.findMany();
  }

  async findOne(id: number) {
    return this.prisma.borrower.findUnique({ where: { borrowerId: id } });
  }

  async update(id: number, updateBorrowerDto: UpdateBorrowerDto) {
    return this.prisma.borrower.update({ where: { borrowerId: id }, data: updateBorrowerDto });
  }

  async remove(id: number) {
    return this.prisma.borrower.delete({ where: { borrowerId: id } });
  }

  async borrowBook(borrowerId: number, borrowBookDto: BorrowBookDto) {

    // Check if an available exemplar of the book exists
    const exemplar = await this.prisma.exemplar.findFirst({
      where: { bookId: borrowBookDto.bookId, status: "Available" },
    });

    if (!exemplar) throw new Error('No available exemplar for the book');

    // Start a Prisma transaction
    return await this.prisma.$transaction([

      // Create a new Transaction
      this.prisma.transaction.create({
        data: {
          borrowerId,
          exemplarId: exemplar.exemplarId,
          dueToDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
        },
      }),

      // Update exemplar status to Borrowed
      this.prisma.exemplar.update({
        where: { exemplarId: exemplar.exemplarId },
        data: { status: "Borrowed" },
      }),
    ]);
  }

  async returnBook(borrowerId: number, exemplarId: number) {

    // Find the transaction
    const transaction = await this.prisma.transaction.findFirst({
      where: {
        borrowerId,
        exemplarId,
        returnedAt: null,
      },
    });

    if (!transaction) throw new Error('No such transaction found');

    // Set the returnedAt field of the transaction
    await this.prisma.transaction.update({
      where: { transactionId: transaction.transactionId },
      data: { returnedAt: new Date() },
    });

    // Update exemplar status to Available
    return this.prisma.exemplar.update({
      where: { exemplarId },
      data: { status: "Available" },
    });
  }
}
