import { IsEmail, IsString, Length } from 'class-validator';
import { BorrowersModel } from '../borrowers.model';

export class CreateBorrowerDto implements Omit<BorrowersModel, 'id'> {
  @Length(1, 255)
  @IsString()
  firstName: string;

  @Length(1, 255)
  @IsString()
  lastName: string;

  @IsEmail()
  email: string;
}
