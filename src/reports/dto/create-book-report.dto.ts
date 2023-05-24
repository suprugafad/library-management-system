import { CreateExemplarDto } from '../../exemplars/dto/create-exemplar.dto';

export class CreateBookReportDto {
  id: number;
  isbn: string;
  title: string;
  author: string;
  publicationYear: number;
  exemplars: CreateExemplarDto[];
}
