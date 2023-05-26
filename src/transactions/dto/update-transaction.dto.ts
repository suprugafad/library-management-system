import { PickType } from '@nestjs/mapped-types';
import { TransactionModel } from '../transaction.model';
import { Transform } from 'class-transformer';
import { IsDate, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTransactionDto extends PickType(TransactionModel, [
  'returnedAt',
] as const) {
  @ApiProperty({ example: '2023-07-24T22:37:44.231Z' })
  @Transform(({ value }) => new Date(value))
  @IsDate()
  @IsOptional()
  returnedAt: Date;

  @ApiProperty({ example: '2023-05-24T10:19:06.906Z' })
  @Transform(({ value }) => new Date(value))
  @IsDate()
  @IsOptional()
  dueToDate: Date;
}
