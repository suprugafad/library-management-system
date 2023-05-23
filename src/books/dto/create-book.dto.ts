import {
  IsString,
  Length,
  IsNumberString,
  IsNumber,
  Min,
  Max,
} from 'class-validator';
import { BookModel } from '../book.model';

export class CreateBookDto implements Omit<BookModel, 'id'> {
  @Length(9, 13)
  @IsNumberString()
  isbn: string;

  @Length(1, 255)
  @IsString()
  title: string;

  @Length(1, 255)
  @IsString()
  author: string;

  @Max(new Date().getFullYear())
  @Min(0)
  @IsNumber()
  publicationYear: number;
}
