import { Type } from 'class-transformer';
import { IsString, Length, IsNumberString } from 'class-validator';

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

  @Type(() => Date)
  publicationYear: Date;
}
