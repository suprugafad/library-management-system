import { IsEmail, IsString, Length } from 'class-validator';
import { BorrowerModel } from '../borrower.model';

export class CreateBorrowerDto implements Omit<BorrowerModel, 'id'> {
  @Length(1, 255)
  @IsString()
  firstName: string;

  @Length(1, 255)
  @IsString()
  lastName: string;

  @IsEmail()
  email: string;
}
