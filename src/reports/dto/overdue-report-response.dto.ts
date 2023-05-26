import { OverdueBorrowerItemResponse } from './overdue-report-borrower-response.dto';
import { ApiProperty } from '@nestjs/swagger';
import { ExemplarItemResponseDto } from 'src/exemplars/dto/exemplar-item-response.dto';

class OverdueResponseItemDto {
  @ApiProperty({ type: OverdueBorrowerItemResponse })
  borrower: OverdueBorrowerItemResponse;

  @ApiProperty({ type: ExemplarItemResponseDto })
  exemplar: ExemplarItemResponseDto;

  @ApiProperty()
  borrowedAt: Date;

  @ApiProperty()
  dueToDate: Date;
}

export class OverdueReportResponse {
  @ApiProperty({ type: OverdueResponseItemDto, isArray: true })
  data: OverdueResponseItemDto[];
}
