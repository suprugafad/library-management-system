import { Injectable } from '@nestjs/common';
import { TransactionsService } from '../../transactions/transactions.service';
import { BooksOverdueReportModel } from '../models/books-overdue.model';
import { ExemplarModel } from '../../exemplars/exemplar.model';
import { BorrowerModel } from '../../borrowers/borrower.model';

interface PrismaTransaction {
  borrower?: BorrowerModel;
  exemplar?: ExemplarModel;
  borrowedAt?: Date;
  dueToDate?: Date;
}

@Injectable()
export class BooksOverdueReportService {
  constructor(private readonly transactionsService: TransactionsService) {}

  async generateOverdueBooksReport(): Promise<BooksOverdueReportModel[]> {
    const allOpenTransactions = await this.getAllUnreturnedExemplars();

    return allOpenTransactions.filter((transaction) => {
      const now = new Date();
      const dueToDate = new Date(transaction.dueToDate);

      return dueToDate < now;
    });
  }

  private async getAllUnreturnedExemplars(): Promise<PrismaTransaction[]> {
    return this.transactionsService.findMany({
      where: {
        returnedAt: null,
      },
      select: {
        borrower: true,
        exemplar: true,
        borrowedAt: true,
        dueToDate: true,
      },
      include: {
        borrower: true,
        exemplar: true,
      },
    });
  }
}
