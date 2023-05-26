import { BorrowerModel } from '../borrower.model';
import { ApiProperty } from '@nestjs/swagger';

export class BorrowerItemResponseDto implements BorrowerModel {
  @ApiProperty({ example: 7 })
  id: number;

  @ApiProperty({ example: 'John' })
  firstName: string;

  @ApiProperty({ example: 'Doe' })
  lastName: string;

  @ApiProperty({ example: 'john.doe@email.com' })
  email: string;
}
