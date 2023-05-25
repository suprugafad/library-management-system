import { Injectable } from '@nestjs/common';
import { CreateExemplarDto } from './dto/create-exemplar.dto';
import { UpdateExemplarDto } from './dto/update-exemplar.dto';
import { ExemplarsRepository } from './exemplar.repository';
import { ExemplarsQueryParamsDto } from './dto/exemplars-query-params.dto';
import { ExemplarFindManyParams } from './interface/exemplar-find-many-params.interface';

@Injectable()
export class ExemplarsService {
  constructor(private readonly exemplarsRepository: ExemplarsRepository) {}

  create(createExemplarDto: CreateExemplarDto) {
    return this.exemplarsRepository.create(createExemplarDto);
  }

  getAll(exemplarQueryParamDto: ExemplarsQueryParamsDto) {
    return this.exemplarsRepository.getAll(exemplarQueryParamDto);
  }

  getOne(id: number) {
    return this.exemplarsRepository.getById(id);
  }

  update(id: number, updateExemplarDto: UpdateExemplarDto) {
    return this.exemplarsRepository.update(id, updateExemplarDto);
  }

  remove(id: number) {
    return this.exemplarsRepository.remove(id);
  }
  findMany(params: ExemplarFindManyParams) {
    return this.exemplarsRepository.findMany(params);
  }
}
