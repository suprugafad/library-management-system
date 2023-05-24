import { CreateExemplarDto } from '../../exemplars/dto/create-exemplar.dto';
import { CreateBorrowerDto } from '../../borrowers/dto/create-borrower.dto';

export class CreateBorrowedExemplarReportDto {
  exemplar: CreateExemplarDto;
  borrower: CreateBorrowerDto;
}
