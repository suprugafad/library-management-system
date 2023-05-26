import { ApiProperty } from '@nestjs/swagger';
import { TransactionItemResponseDto } from './transaction-item-response.dto';

export class TransactionResponseDto {
  @ApiProperty({ type: TransactionItemResponseDto, isArray: true })
  data: [TransactionItemResponseDto];
}
