import { Min, IsInt } from 'class-validator';
import { PaginationQueryParamsDto } from 'src/common/pagination-query-params.dto';

export class TransactionsQueryParamsDto extends PaginationQueryParamsDto {
  @Min(1)
  @IsInt()
  borrowerId?: number;

  @Min(1)
  @IsInt()
  exemplarId?: number;

  // TODO: implement borrowedAt

  // TODO: implement returnedAt

  // TODO: implement dueToAt
}
