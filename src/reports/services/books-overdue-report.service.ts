import { Injectable } from '@nestjs/common';
import { TransactionsService } from '../../transactions/transactions.service';
import { BorrowersService } from '../../borrowers/borrowers.service';
import { ExemplarsService } from '../../exemplars/exemplars.service';
import { ExemplarModel } from '../../exemplars/exemplar.model';
import { BorrowerModel } from '../../borrowers/borrower.model';

@Injectable()
export class BooksOverdueReportService {
  constructor(
    private readonly transactionsService: TransactionsService,
    private readonly borrowersService: BorrowersService,
    private readonly exemplarsService: ExemplarsService,
  ) {}
  async generateOverdueBooksReport() {
    const now = new Date();

    const overdueTransactions = await this.transactionsService.findMany({
      where: {
        dueToDate: {
          lt: now,
        },
        returnedAt: null,
      },
      select: {
        borrowedAt: true,
        dueToDate: true,
        borrowerId: true,
        exemplarId: true,
      },
    });

    return Promise.all(
      overdueTransactions.map(
        async ({ borrowerId, exemplarId, borrowedAt, dueToDate }) => {
          const borrower: BorrowerModel = await this.borrowersService.getOne(
            borrowerId,
          );
          const exemplar: ExemplarModel = await this.exemplarsService.getOne(
            exemplarId,
          );

          return {
            borrower,
            exemplar,
            borrowedAt,
            dueToDate,
          };
        },
      ),
    );
  }
}
