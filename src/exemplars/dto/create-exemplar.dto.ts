import { IsEnum, IsNumber, Min } from 'class-validator';
import { ExemplarsModel } from '../exemplars.model';
import { ExemplarStatus } from '../enum/exemplar-status.enum';

export class CreateExemplarDto implements Omit<ExemplarsModel, 'id'> {
  @IsNumber()
  @Min(1)
  bookId: number;

  @IsEnum(ExemplarStatus)
  status: ExemplarsModel['status'];
}
