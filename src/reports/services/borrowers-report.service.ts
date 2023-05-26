import { Injectable } from '@nestjs/common';
import { BorrowersReportModel } from '../models/borrowers-report.model';
import { ReportsRepository } from '../reports.repository';

@Injectable()
export class BorrowersReportService {
  constructor(private readonly reportsRepository: ReportsRepository) {}

  async generateBorrowersReport(): Promise<{ data: BorrowersReportModel[] }> {
    const borrowers = await this.reportsRepository.generateBorrowers();

    return { data: borrowers };
  }
}
