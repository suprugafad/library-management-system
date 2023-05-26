import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({ example: '9781617295850', required: false })
  @Length(10, 13)
  @IsNumberString()
  @IsOptional()
  isbn?: string;

  @ApiProperty({ example: 'API Design Patterns', required: false })
  @Length(1, 255)
  @IsString()
  @IsOptional()
  title?: string;

  @ApiProperty({ example: 'JJ Geewax', required: false })
  @Length(1, 255)
  @IsString()
  @IsOptional()
  author?: string;

  @ApiProperty({ example: 2021, required: false })
  @Max(new Date().getFullYear())
  @Min(0)
  @Transform(({ value }) => parseInt(value))
  @IsOptional()
  publicationYear?: number;

  // TODO: add orderBy parameter
}
