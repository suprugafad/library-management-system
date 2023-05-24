import { Min, IsInt, IsOptional } from 'class-validator';
import { PaginationQueryParamsDto } from 'src/common/pagination-query-params.dto';

export class TransactionsQueryParamsDto extends PaginationQueryParamsDto {
  @Min(1)
  @IsInt()
  @IsOptional()
  borrowerId?: number;

  @Min(1)
  @IsInt()
  @IsOptional()
  exemplarId?: number;

  // TODO: implement borrowedAt

  // TODO: implement returnedAt

  // TODO: implement dueToAt
}
