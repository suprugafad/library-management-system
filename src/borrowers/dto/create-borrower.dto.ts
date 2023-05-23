import { IsEmail, IsString, Length } from 'class-validator';

export class CreateBorrowerDto {
  @Length(1, 255)
  @IsString()
  firstName: string;

  @Length(1, 255)
  @IsString()
  lastName: string;

  @IsEmail()
  email: string;
}
