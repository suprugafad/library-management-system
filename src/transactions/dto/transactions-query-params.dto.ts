import { ApiProperty } from '@nestjs/swagger';
import { Min, IsInt, IsOptional } from 'class-validator';
import { PaginationQueryParamsDto } from 'src/common/pagination-query-params.dto';

export class TransactionsQueryParamsDto extends PaginationQueryParamsDto {
  @ApiProperty({ example: 1, required: false })
  @Min(1)
  @IsInt()
  @IsOptional()
  borrowerId?: number;

  @ApiProperty({ example: 1, required: false })
  @Min(1)
  @IsInt()
  @IsOptional()
  exemplarId?: number;

  // TODO: implement borrowedAt

  // TODO: implement returnedAt

  // TODO: implement dueToAt
}
