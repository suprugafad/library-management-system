import { Transform } from 'class-transformer';
import {
  IsNumber,
  IsDate,
} from 'class-validator';
export class CreateTransactionDto {
  @IsNumber()
  borrowerId: number;
  @IsNumber()
  exemplarId: number;
  @IsDate()
  borrowedAt: DateTime;
  @IsDate()
  returnedAt: DateTime;

  @IsDate()
  dueToDate: DateTime;

}
