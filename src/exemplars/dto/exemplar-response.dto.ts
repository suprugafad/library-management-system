import { Exemplar, Status } from '@prisma/client';

export class ExemplarResponseDto implements Exemplar {
  id: number;

  bookId: number;

  status: Status;
}
