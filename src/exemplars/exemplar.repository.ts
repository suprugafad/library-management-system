import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ExemplarModel } from './exemplar.model';
import { GenericRepository } from 'src/database/generic-repository';
import { ExemplarsQueryParamsDto } from './dto/exemplars-query-params.dto';
import { CreateExemplarDto } from './dto/create-exemplar.dto';
import { UpdateExemplarDto } from './dto/update-exemplar.dto';
import { ExemplarFindManyParams } from './interface/exemplar-find-many-params.interface';
import { GenericPagination } from 'src/common/generic-pagination.model';

@Injectable()
export class ExemplarsRepository implements GenericRepository<ExemplarModel> {
  constructor(private readonly prisma: PrismaService) {}

  getById(id: number): Promise<ExemplarModel> {
    return this.prisma.exemplar.findUniqueOrThrow({ where: { id } });
  }

  async getAll({
    skip,
    take,
    ...where
  }: ExemplarsQueryParamsDto): Promise<GenericPagination<ExemplarModel>> {
    const total = await this.prisma.exemplar.count({ where });
    const data = await this.prisma.exemplar.findMany({ skip, take, where });

    return { total, data };
  }

  create(data: CreateExemplarDto): Promise<ExemplarModel> {
    return this.prisma.exemplar.create({ data });
  }

  update(id: number, data: UpdateExemplarDto): Promise<ExemplarModel> {
    return this.prisma.exemplar.update({ data, where: { id } });
  }

  async remove(id: number) {
    await this.prisma.exemplar.delete({ where: { id } });
  }

  findMany(where: ExemplarFindManyParams) {
    return this.prisma.exemplar.findMany({ where });
  }
}
