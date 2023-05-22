import { Transform, Type } from 'class-transformer';
import {
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
  Length,
  Min,
} from 'class-validator';

export class BooksQueryParamsDto {
  @Min(0)
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  @IsOptional()
  skip? = 0;

  @Min(0)
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  @IsOptional()
  take? = 20;

  @Min(0)
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  @IsOptional()
  id?: number;

  @Length(10, 13)
  @IsNumberString()
  @IsOptional()
  isbn?: string;

  @Length(1, 255)
  @IsString()
  @IsOptional()
  author?: string;

  @Length(1, 255)
  @IsString()
  @IsOptional()
  title?: string;

  @Type(() => Date)
  @IsOptional()
  publicationYear?: Date;

  // TODO: add orderBy parameter
}
