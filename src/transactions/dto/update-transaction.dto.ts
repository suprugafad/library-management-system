import { PickType } from '@nestjs/mapped-types';
import { TransactionModel } from '../transaction.model';
import { Transform } from 'class-transformer';

export class UpdateTransactionDto extends PickType(TransactionModel, [
  'returnedAt',
] as const) {
  @Transform(({ value }) => new Date(value))
  returnedAt: Date;
}
