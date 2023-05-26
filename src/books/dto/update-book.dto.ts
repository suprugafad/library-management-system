import { ApiProperty } from '@nestjs/swagger';
import { CreateBookDto } from './create-book.dto';
import {
  Length,
  IsNumberString,
  IsOptional,
  IsString,
  Max,
  Min,
  IsNumber,
} from 'class-validator';

export class UpdateBookDto implements Partial<CreateBookDto> {
  @ApiProperty({ example: '9781617295850', required: false })
  @Length(9, 13)
  @IsNumberString()
  @IsOptional()
  isbn: string;

  @ApiProperty({ example: 'API Design Patterns', required: false })
  @Length(1, 255)
  @IsString()
  @IsOptional()
  title: string;

  @ApiProperty({ example: 'JJ Geewax', required: false })
  @Length(1, 255)
  @IsString()
  @IsOptional()
  author: string;

  @ApiProperty({ example: 2021, required: false })
  @Max(new Date().getFullYear())
  @Min(0)
  @IsNumber()
  @IsOptional()
  publicationYear: number;
}
