import { IsEmail, IsOptional, IsString, Length } from 'class-validator';
import { PaginationQueryParamsDto } from 'src/common/pagination-query-params.dto';

export class BorrowersQueryParamsDto extends PaginationQueryParamsDto {
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
