import { ApiProperty } from '@nestjs/swagger';
import { BorrowerItemResponseDto } from './borrower-item-response.dto';

export class BorrowersPaginatedResponseDto {
  @ApiProperty({ example: 1 })
  total: number;

  @ApiProperty({ type: BorrowerItemResponseDto, isArray: true })
  data: [BorrowerItemResponseDto];
}
