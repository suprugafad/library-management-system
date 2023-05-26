import { IsEmail, IsOptional, IsString, Length } from 'class-validator';
import { BorrowerModel } from '../borrower.model';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateBorrowerDto implements Omit<BorrowerModel, 'id'> {
  @ApiProperty({ example: 'John', required: false })
  @Length(1, 255)
  @IsString()
  @IsOptional()
  firstName: string;

  @ApiProperty({ example: 'Doe', required: false })
  @Length(1, 255)
  @IsString()
  @IsOptional()
  lastName: string;

  @ApiProperty({ example: 'john.doe@email.com', required: false })
  @IsEmail()
  @IsOptional()
  email: string;
}
