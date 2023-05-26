import { ApiProperty } from '@nestjs/swagger';
import { CreateBookDto } from './create-book.dto';

export class UpdateBookDto implements Partial<CreateBookDto> {
  @ApiProperty({ example: '9781617295850', required: false })
  isbn: string;

  @ApiProperty({ example: 'API Design Patterns', required: false })
  title: string;

  @ApiProperty({ example: 'JJ Geewax', required: false })
  author: string;

  @ApiProperty({ example: 2021, required: false })
  publicationYear: number;
}
