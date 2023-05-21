import { Length, IsNumberString, IsEnum, IsNumber, Min } from 'class-validator';
import { Exemplar, Status } from '@prisma/client';

export class CreateExemplarDto implements Omit<Exemplar, 'id'> {
  @IsNumber()
  @Min(0)
  bookId: number;

  // TODO Check if this validate works as intended
  @IsEnum(Status)
  status: Status;
}
