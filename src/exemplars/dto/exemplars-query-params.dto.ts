import { Exemplar } from '@prisma/client';
import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, Min } from 'class-validator';
import { PaginationQueryParamsDto } from 'src/common/pagination-query-params.dto';

export class ExemplarsQueryParamsDto
  extends PaginationQueryParamsDto
  implements Partial<Pick<Exemplar, 'bookId'>>
{
  @Min(1)
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  @IsOptional()
  bookId?: number;
}
