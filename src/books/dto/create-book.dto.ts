import {
  IsString,
  Length,
  IsNumberString,
  IsNumber,
  Min,
  Max,
} from 'class-validator';
import { BookModel } from '../book.model';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto implements Omit<BookModel, 'id'> {
  @ApiProperty({ example: '9781617295850' })
  @Length(9, 13)
  @IsNumberString()
  isbn: string;

  @ApiProperty({ example: 'API Design Patterns' })
  @Length(1, 255)
  @IsString()
  title: string;

  @ApiProperty({ example: 'JJ Geewax' })
  @Length(1, 255)
  @IsString()
  author: string;

  @ApiProperty({ example: 2021 })
  @Max(new Date().getFullYear())
  @Min(0)
  @IsNumber()
  publicationYear: number;
}
