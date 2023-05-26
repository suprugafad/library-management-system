import { ApiProperty } from '@nestjs/swagger';
import { BorrowerItemResponseDto } from './borrower-item-response.dto';
import { BookItemResponseDto } from 'src/books/dto/book-item-response.dto';

export class BorrowerResponseDto {
  @ApiProperty({ type: BorrowerItemResponseDto, isArray: true })
  data: [BookItemResponseDto];
}
