import { Exemplar } from '@prisma/client';
import { Transform } from 'class-transformer';
import { IsNumber, IsNumberString, IsOptional, Min } from 'class-validator';

export class QueryParamsDto {
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Transform(({ value }) => parseInt(value))
  id?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Transform(({ value }) => parseInt(value))
  skip? = 0;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Transform(({ value }) => parseInt(value))
  take? = 20;
}

export class ExemplarsQueryParamsDto
  extends QueryParamsDto
  implements Partial<Exemplar>
{
  @Min(0)
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  @IsOptional()
  bookId?: number;
}
