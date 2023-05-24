import { IsInt, Min } from 'class-validator';
import { TransactionModel } from '../transaction.model';

export class CreateTransactionDto
  implements Pick<TransactionModel, 'borrowerId' | 'exemplarId'>
{
  @Min(1)
  @IsInt()
  borrowerId: number;

  @Min(1)
  @IsInt()
  exemplarId: number;
}
