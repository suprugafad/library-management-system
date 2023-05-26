import { ApiProperty } from '@nestjs/swagger';
import { BookItemResponseDto } from './book-item-response.dto';

export class BooksPaginatedResponseDto {
  @ApiProperty({ example: 1 })
  total: number;

  @ApiProperty({ type: BookItemResponseDto, isArray: true })
  data: [BookItemResponseDto];
}
