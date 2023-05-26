import { IsInt, Min } from 'class-validator';
import { TransactionModel } from '../transaction.model';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTransactionDto
  implements Pick<TransactionModel, 'borrowerId' | 'exemplarId'>
{
  @ApiProperty({ example: 1 })
  @Min(1)
  @IsInt()
  borrowerId: number;

  @ApiProperty({ example: 1 })
  @Min(1)
  @IsInt()
  exemplarId: number;
}
