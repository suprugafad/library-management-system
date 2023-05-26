import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, Min } from 'class-validator';
import { TAKE, SKIP } from 'src/config/pagination-options.config';

export class PaginationQueryParamsDto {
  @ApiProperty({ example: 5, required: false })
  @Min(0)
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  @IsOptional()
  skip: number = SKIP;

  @ApiProperty({ example: 10, required: false })
  @Min(0)
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  @IsOptional()
  take: number = TAKE;
}
