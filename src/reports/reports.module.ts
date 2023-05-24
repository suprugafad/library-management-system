import { Module } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { PrismaModule } from 'src/database/prisma.module';
import { BooksService } from 'src/books/books.service';
import { ExemplarsService } from 'src/exemplars/exemplars.service';
import { TransactionsService } from 'src/transactions/transactions.service';
import { BorrowersService } from 'src/borrowers/borrowers.service';

@Module({
  imports: [PrismaModule],
  controllers: [ReportsController],
  providers: [
    ReportsService,
    BooksService,
    ExemplarsService,
    TransactionsService,
    BorrowersService,
  ],
})
export class ReportsModule {}
