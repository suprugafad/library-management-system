import { CreateTransactionDto } from "../../transactions/dto/create-transaction.dto";

export class CreateBorrowerReportDto {
  id: number;
  transactions: CreateTransactionDto[];
}
