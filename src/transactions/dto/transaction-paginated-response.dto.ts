import { ApiProperty } from '@nestjs/swagger';
import { TransactionItemResponseDto } from './transaction-item-response.dto';

export class TransactionsPaginatedResponse {
  @ApiProperty({ example: 1 })
  total: number;

  @ApiProperty({ type: TransactionItemResponseDto, isArray: true })
  data: [TransactionItemResponseDto];
}
