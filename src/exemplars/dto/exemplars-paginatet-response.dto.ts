import { ApiProperty } from '@nestjs/swagger';
import { ExemplarItemResponseDto } from './exemplar-item-response.dto';

export class ExemplarsPaginatedResponseDto {
  @ApiProperty({ example: 1 })
  total: number;

  @ApiProperty({ type: ExemplarItemResponseDto, isArray: true })
  data: [ExemplarItemResponseDto];
}
