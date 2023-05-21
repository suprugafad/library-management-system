import { Exemplar } from '@prisma/client';
import { Transform } from 'class-transformer';
import { IsNumber, IsNumberString, IsOptional, Min } from 'class-validator';

// This is repeated for every object
export class QueryParamsDto {
  // ? Is this id somehow useful in query params? There is already an endpoint that handles this
  @IsOptional()
  // ? Why doesn't work with @IsNumberString()?
  // @IsNumberString()
  // ? Why it does work with @IsNumber? Isn't Query param a String?
  @IsNumber()
  @Min(0)
  @Transform(({ value }) => parseInt(value))
  id?: number;

  @IsOptional()
  // @IsNumberString()
  @IsNumber()
  @Min(0)
  @Transform(({ value }) => parseInt(value))
  skip? = 0;

  @IsOptional()
  // @IsNumberString()
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
  // @IsNumberString()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  @IsOptional()
  bookId?: number;
}
