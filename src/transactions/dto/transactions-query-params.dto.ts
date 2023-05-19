import { Transform } from 'class-transformer';
import {
  IsNumber,
  Min,
  IsDate,
} from 'class-validator';

export class TransactionsQueryParamsDto {
 @Min(0)
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  @IsOptional()
  skip? = 0;

  @Min(0)
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  @IsOptional()
  take? = 20;
  
  @IsNumber()
  @IsNotEmpty()
  borrowerId?: number;

  @IsNumber()
  @IsNotEmpty()
  exemplarId?: number;

  @IsString()
  @IsNotEmpty()
  borrowedAt?: DateTime;

 
  @IsDate()
  @IsNotEmpty()
  returnedAt: DateTime;

 
  @IsDate()
  @IsNotEmpty()
  dueToDate: DateTime;
}
