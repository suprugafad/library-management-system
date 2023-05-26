import { ApiProperty } from '@nestjs/swagger';
import { TransactionItemResponseDto } from 'src/transactions/dto/transaction-item-response.dto';

export class BorrowerItemResponse {
  @ApiProperty({ example: 7 })
  id: number;

  @ApiProperty({ example: 'John' })
  firstName: string;

  @ApiProperty({ example: 'Doe' })
  lastName: string;

  @ApiProperty({ example: 'john.doe@email.com' })
  email: string;

  @ApiProperty({ type: TransactionItemResponseDto, isArray: true })
  transactions: TransactionItemResponseDto[];
}

export class BorrowersReportResponse {
  @ApiProperty({ type: BorrowerItemResponse, isArray: true })
  data: BorrowerItemResponse[];
}
