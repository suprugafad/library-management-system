import { Injectable } from '@nestjs/common';
import { CreateExemplarDto } from './dto/create-exemplar.dto';
import { UpdateExemplarDto } from './dto/update-exemplar.dto';
import { ExemplarsRepository } from './exemplar.repository';
import { ExemplarsQueryParamsDto } from './dto/exemplars-query-params.dto';

@Injectable()
export class ExemplarsService {
  constructor(private readonly exemplarsRepository: ExemplarsRepository) {}
  create({ bookId, ...restExemplar }: CreateExemplarDto) {
    return this.exemplarsRepository.create({
      ...restExemplar,
      Book: { connect: { id: bookId } },
    });
  }

  getAll({ skip, take, ...where }: ExemplarsQueryParamsDto) {
    return this.exemplarsRepository.getAll({ skip, take, where });
  }

  getOne(id: number) {
    return this.exemplarsRepository.getById({ id });
  }

  update(id: number, updateExemplarDto: UpdateExemplarDto) {
    return this.exemplarsRepository.update({
      where: { id },
      data: updateExemplarDto,
    });
  }

  remove(id: number) {
    return this.exemplarsRepository.remove({ id });
  }
}
