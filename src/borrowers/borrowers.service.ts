import { Injectable } from '@nestjs/common';
import { BorrowersRepository } from './borrowers.repository';
import { UpdateBorrowerDto } from './dto/update-borrower.dto';
import { CreateBorrowerDto } from './dto/create-borrower.dto';
import { BorrowersQueryParamsDto } from './dto/borrowers-query-params.dto';

@Injectable()
export class BorrowersService {
  constructor(private readonly borrowersRepository: BorrowersRepository) {}

  create(createBorrowerDto: CreateBorrowerDto) {
    return this.borrowersRepository.create(createBorrowerDto);
  }

  getAll({ skip, take, ...where }: BorrowersQueryParamsDto) {
    return this.borrowersRepository.getAll({ skip, take, where });
  }

  getOne(id: number) {
    return this.borrowersRepository.getById({ id });
  }

  update(id: number, updateBorrowerDto: UpdateBorrowerDto) {
    return this.borrowersRepository.update({
      where: { id },
      data: updateBorrowerDto,
    });
  }

  remove(id: number) {
    return this.borrowersRepository.remove({ id });
  }
}
