import { ApiProperty } from '@nestjs/swagger';
import { TransactionModel } from '../transaction.model';

export class TransactionItemResponseDto implements TransactionModel {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 1 })
  borrowerId: number;

  @ApiProperty({ example: 1 })
  exemplarId: number;

  @ApiProperty({ example: '2023-06-24T22:37:44.231Z' })
  borrowedAt: Date;

  @ApiProperty({ example: null })
  returnedAt: Date | null;

  @ApiProperty({ example: '2023-06-24T22:37:44.231Z' })
  dueToDate: Date;
}
