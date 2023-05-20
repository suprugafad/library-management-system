import { Transform } from 'class-transformer';
import {
  IsString,
  Length,
  IsNumberString,
  IsDateString,
} from 'class-validator';

export class CreateBookDto {
  @Length(9, 13)
  @IsNumberString()
  isbn: string;

  @Length(1, 255)
  @IsString()
  title: string;

  @Length(1, 255)
  @IsString()
  author: string;

  @Transform(({ value }) => new Date(value).toISOString())
  @IsDateString()
  publicationYear: string;
}
