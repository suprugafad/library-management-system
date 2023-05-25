import { Injectable } from '@nestjs/common';
import { BorrowersService } from 'src/borrowers/borrowers.service';
import { BorrowersReportModel } from '../models/borrowers-report.model';

@Injectable()
export class BorrowersReportService {
  constructor(private readonly borrowersService: BorrowersService) {}

  async generateBorrowersReport(): Promise<BorrowersReportModel[]> {
    return await this.generateBorrowers();
  }

  private async generateBorrowers(): Promise<BorrowersReportModel[]> {
    return (await this.borrowersService.findMany({
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
    })) as Array<BorrowersReportModel>;
  }
}
