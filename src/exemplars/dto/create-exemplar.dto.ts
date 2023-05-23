import { IsEnum, IsNumber, Min } from 'class-validator';
import { ExemplarsModel } from '../exemplars.modes';
import { Status } from '../enum/status.enum';

export class CreateExemplarDto implements Omit<ExemplarsModel, 'id'> {
  @IsNumber()
  @Min(1)
  bookId: number;

  @IsEnum(Status)
  status: ExemplarsModel['status'];
}
