import { Module } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { PrismaModule } from 'src/database/prisma.module';
import { BooksRepository } from '../books/books.repository';
import { ExemplarsRepository } from '../exemplars/exemplar.repository';
import { TransactionsRepository } from '../transactions/transactions.repository';
import { BorrowersRepository } from '../borrowers/borrowers.repository';

@Module({
  imports: [PrismaModule],
  controllers: [ReportsController],
  providers: [
    ReportsService,
    BooksRepository,
    ExemplarsRepository,
    TransactionsRepository,
    BorrowersRepository,
  ],
})
export class ReportsModule {}
