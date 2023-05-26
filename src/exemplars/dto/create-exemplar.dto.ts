import { IsEnum, IsNumber, Min } from 'class-validator';
import { ExemplarModel } from '../exemplar.model';
import { ExemplarStatus } from '../enum/exemplar-status.enum';
import { ApiProperty } from '@nestjs/swagger';

export class CreateExemplarDto implements Omit<ExemplarModel, 'id'> {
  @ApiProperty({ example: 1 })
  @IsNumber()
  @Min(1)
  bookId: number;

  @ApiProperty({ example: ExemplarStatus.Available })
  @IsEnum(ExemplarStatus)
  status: ExemplarModel['status'];
}
