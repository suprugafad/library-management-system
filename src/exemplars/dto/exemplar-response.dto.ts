import { ApiProperty } from '@nestjs/swagger';
import { ExemplarModel } from '../exemplar.model';
import { ExemplarStatus } from '../enum/exemplar-status.enum';

export class ExemplarResponseDto implements ExemplarModel {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 1 })
  bookId: number;

  @ApiProperty({ example: ExemplarStatus.Available })
  status: ExemplarModel['status'];
}
