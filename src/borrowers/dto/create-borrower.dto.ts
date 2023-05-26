import { IsEmail, IsString, Length } from 'class-validator';
import { BorrowerModel } from '../borrower.model';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBorrowerDto implements Omit<BorrowerModel, 'id'> {
  @ApiProperty({ example: 'John' })
  @Length(1, 255)
  @IsString()
  firstName: string;

  @ApiProperty({ example: 'Doe' })
  @Length(1, 255)
  @IsString()
  lastName: string;

  @ApiProperty({ example: 'john.doe@email.com' })
  @IsEmail()
  email: string;
}
