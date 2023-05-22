import { Length, IsNumberString, IsEnum, IsNumber, Min } from 'class-validator';
import { Exemplar, Status } from '@prisma/client';

export class CreateExemplarDto implements Omit<Exemplar, 'id'> {
  @IsNumber()
  @Min(0)
  bookId: number;

  @IsEnum(Status)
  status: Status;
}
