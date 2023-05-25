import { Injectable } from '@nestjs/common';
import { BorrowersService } from 'src/borrowers/borrowers.service';

@Injectable()
export class BorrowersReportService {
  constructor(private readonly borrowersService: BorrowersService) {}

  async generateBorrowersReport() {
    const borrowers = await this.borrowersService.findMany({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        transactions: {
          select: {
            id: true,
            borrowerId: true,
            exemplarId: true,
            borrowedAt: true,
            returnedAt: true,
            dueToDate: true,
          },
        },
      },
    });

    return borrowers.map(({ transactions, ...borrower }) => ({
      ...borrower,
      transactions,
    }));
  }
}
