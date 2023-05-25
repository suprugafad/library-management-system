import { ApiProperty } from '@nestjs/swagger';
import { BookModel } from '../book.model';

export class BookItemResponseDto implements BookModel {
  @ApiProperty({ example: 7 })
  id: number;

  @ApiProperty({ example: '9781617295850' })
  isbn: string;

  @ApiProperty({ example: 'API Design Patterns' })
  title: string;

  @ApiProperty({ example: 'JJ Geewax' })
  author: string;

  @ApiProperty({ example: 2021 })
  publicationYear: number;
}
