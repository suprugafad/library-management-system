import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { Min, IsInt, IsOptional, IsDate } from 'class-validator';
import { PaginationQueryParamsDto } from 'src/common/pagination-query-params.dto';

export class TransactionsQueryParamsDto extends PaginationQueryParamsDto {
  @ApiProperty({ example: 1, required: false })
  @Min(1)
  @IsInt()
  @Transform(({ value }) => parseInt(value))
  @IsOptional()
  borrowerId?: number;

  @ApiProperty({ example: 1, required: false })
  @Min(1)
  @IsInt()
  @Transform(({ value }) => parseInt(value))
  @IsOptional()
  exemplarId?: number;

  @ApiProperty({ example: '2023-06-24T22:37:44.231Z', required: false })
  @IsDate()
  @Transform(({ value }) => new Date(value))
  @IsOptional()
  borrowedAt?: Date;

  @ApiProperty({ example: '2023-07-24T22:37:44.231Z', required: false })
  @IsDate()
  @Transform(({ value }) => new Date(value))
  @IsOptional()
  returnedAt?: Date;

  @ApiProperty({ example: '2023-07-24T22:37:44.231Z', required: false })
  @IsDate()
  @Transform(({ value }) => new Date(value))
  @IsOptional()
  dueToDate?: Date;
}
