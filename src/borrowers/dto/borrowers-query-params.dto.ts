import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, Length } from 'class-validator';
import { PaginationQueryParamsDto } from 'src/common/pagination-query-params.dto';

export class BorrowersQueryParamsDto extends PaginationQueryParamsDto {
  @ApiProperty({ example: 'John', required: false })
  @Length(1, 255)
  @IsString()
  @IsOptional()
  firstName?: string;

  @ApiProperty({ example: 'Doe', required: false })
  @Length(1, 255)
  @IsString()
  @IsOptional()
  lastName?: string;

  @ApiProperty({ example: 'john.doe@email.com', required: false })
  @IsEmail()
  @IsOptional()
  email?: string;
}
