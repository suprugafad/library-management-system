import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Min,
} from 'class-validator';

export class BorrowersQueryParamsDto {
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

  @Min(0)
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  @IsOptional()
  id?: number;

  @Length(1, 255)
  @IsString()
  @IsOptional()
  firstName?: string;

  @Length(1, 255)
  @IsString()
  @IsOptional()
  lastName?: string;

  @IsEmail()
  @IsOptional()
  email?: string;
}
