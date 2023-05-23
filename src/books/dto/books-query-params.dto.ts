import { Transform } from 'class-transformer';
import {
  IsNumberString,
  IsOptional,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';
import { PaginationQueryParamsDto } from 'src/common/pagination-query-params.dto';

export class BooksQueryParamsDto extends PaginationQueryParamsDto {
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

  @Max(new Date().getFullYear())
  @Min(0)
  @Transform(({ value }) => parseInt(value))
  publicationYear: number;

  // TODO: add orderBy parameter
}
