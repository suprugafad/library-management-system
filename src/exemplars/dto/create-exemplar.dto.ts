import { IsEnum, IsNumber, Min } from 'class-validator';
import { ExemplarModel } from '../exemplar.model';
import { ExemplarStatus } from '../enum/exemplar-status.enum';

export class CreateExemplarDto implements Omit<ExemplarModel, 'id'> {
  @IsNumber()
  @Min(1)
  bookId: number;

  @IsEnum(ExemplarStatus)
  status: ExemplarModel['status'];
}
