import { Module } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { PrismaModule } from 'src/database/prisma.module';
import { BooksModule } from 'src/books/books.module';
import { ExemplarsModule } from 'src/exemplars/exemplars.module';
import { TransactionsModule } from 'src/transactions/transactions.module';
import { BorrowersModule } from 'src/borrowers/borrowers.module';
import { BooksReportService } from './services/books-report.service';
import { BooksStatusReportService } from './services/books-status-report.service';
import { BorrowersReportService } from './services/borrowers-report.service';
import { BooksOverdueReportService } from './services/books-overdue-report.service';

@Module({
  imports: [
    PrismaModule,
    BooksModule,
    ExemplarsModule,
    TransactionsModule,
    BorrowersModule,
  ],
  controllers: [ReportsController],
  providers: [
    ReportsService,
    BooksReportService,
    BooksStatusReportService,
    BorrowersReportService,
    BooksOverdueReportService,
  ],
})
export class ReportsModule {}
