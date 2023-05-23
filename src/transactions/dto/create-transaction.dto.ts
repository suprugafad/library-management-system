import { IsInt, Min } from 'class-validator';
import { TransactionModel } from '../transaction.model';

export class CreateTransactionDto implements Omit<TransactionModel, 'id'> {
  @Min(1)
  @IsInt()
  borrowerId: number;

  @Min(1)
  @IsInt()
  exemplarId: number;

  borrowedAt: Date;

  returnedAt: Date;

  dueToDate: Date;
}
