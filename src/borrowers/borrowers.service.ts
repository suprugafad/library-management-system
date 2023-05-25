import { Injectable } from '@nestjs/common';
import { BorrowersRepository } from './borrowers.repository';
import { UpdateBorrowerDto } from './dto/update-borrower.dto';
import { CreateBorrowerDto } from './dto/create-borrower.dto';
import { BorrowersQueryParamsDto } from './dto/borrowers-query-params.dto';
import { BorrowersFindManyParams } from './interface/borrowers-find-many-params.interface';

@Injectable()
export class BorrowersService {
  constructor(private readonly borrowersRepository: BorrowersRepository) {}

  create(createBorrowerDto: CreateBorrowerDto) {
    return this.borrowersRepository.create(createBorrowerDto);
  }

  getAll(borrowersQueryParamsDto: BorrowersQueryParamsDto) {
    return this.borrowersRepository.getAll(borrowersQueryParamsDto);
  }

  getOne(id: number) {
    return this.borrowersRepository.getById(id);
  }

  update(id: number, updateBorrowerDto: UpdateBorrowerDto) {
    return this.borrowersRepository.update(id, updateBorrowerDto);
  }

  remove(id: number) {
    return this.borrowersRepository.remove(id);
  }

  findMany(params: BorrowersFindManyParams) {
    return this.borrowersRepository.findMany(params);
  }
}
