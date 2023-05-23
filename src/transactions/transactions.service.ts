import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { TransactionsRepository } from './transactions.repository';
import { TransactionsQueryParamsDto } from './dto/transactions-query-params.dto';

@Injectable()
export class TransactionsService {
  constructor(
    private readonly transactionsRepository: TransactionsRepository,
  ) {}

  create(createTransactionDto: CreateTransactionDto) {
    return this.transactionsRepository.create(createTransactionDto);
  }

  getAll(transactionsQueryParams: TransactionsQueryParamsDto) {
    return this.transactionsRepository.getAll(transactionsQueryParams);
  }

  getOne(id: number) {
    return this.transactionsRepository.getById(id);
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return this.transactionsRepository.update(id, updateTransactionDto);
  }

  remove(id: number) {
    return this.transactionsRepository.remove(id);
  }
}
