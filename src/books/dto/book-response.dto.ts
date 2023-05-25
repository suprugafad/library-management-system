import { ApiProperty } from '@nestjs/swagger';
import { BookModel } from '../book.model';
import { CreateBookDto } from './create-book.dto';

export class BookResponseDto extends CreateBookDto implements BookModel {
  @ApiProperty({ example: 7 })
  id: number;
}

export class BooksNestedResponseDto {
  @ApiProperty({ type: BookResponseDto, isArray: true })
  data: [BooksNestedResponseDto];
}
