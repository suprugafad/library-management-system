import { Transform } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional, Min } from 'class-validator';
import { PaginationQueryParamsDto } from 'src/common/pagination-query-params.dto';
import { ExemplarModel } from '../exemplar.model';
import { ExemplarStatus } from '../enum/exemplar-status.enum';

export class ExemplarsQueryParamsDto
  extends PaginationQueryParamsDto
  implements Partial<Pick<ExemplarModel, 'bookId'>>
{
  @Min(1)
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  @IsOptional()
  bookId?: number;

  @IsEnum(ExemplarStatus)
  @IsOptional()
  status: ExemplarModel['status'];
}
