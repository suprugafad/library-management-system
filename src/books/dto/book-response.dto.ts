import { ApiProperty } from '@nestjs/swagger';
import { BookItemResponseDto } from './book-item-response.dto';

export class BooksResponseDto {
  @ApiProperty({ type: BookItemResponseDto, isArray: true })
  data: [BookItemResponseDto];
}
