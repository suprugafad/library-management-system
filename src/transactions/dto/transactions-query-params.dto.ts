import { Transform } from 'class-transformer';
import { Min, IsInt, IsOptional, IsDate } from 'class-validator';
import { PaginationQueryParamsDto } from 'src/common/pagination-query-params.dto';
import { TransactionModel } from '../transaction.model';

export class TransactionsQueryParamsDto
  extends PaginationQueryParamsDto
  implements Omit<Partial<TransactionModel>, 'id'>
{
  @Min(1)
  @IsInt()
  @Transform(({ value }) => parseInt(value))
  @IsOptional()
  borrowerId?: number;

  @Min(1)
  @IsInt()
  @Transform(({ value }) => parseInt(value))
  @IsOptional()
  exemplarId?: number;

  @IsDate()
  @Transform(({ value }) => new Date(value))
  @IsOptional()
  borrowedAt?: Date;

  @IsDate()
  @Transform(({ value }) => new Date(value))
  @IsOptional()
  returnedAt?: Date;

  @IsDate()
  @Transform(({ value }) => new Date(value))
  @IsOptional()
  dueToDate?: Date;
}
