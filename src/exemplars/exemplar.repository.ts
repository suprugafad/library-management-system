import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ExemplarModel } from './exemplar.model';
import { GenericRepository } from 'src/database/generic-repository';
import { ExemplarsQueryParamsDto } from './dto/exemplars-query-params.dto';
import { CreateExemplarDto } from './dto/create-exemplar.dto';
import { UpdateExemplarDto } from './dto/update-exemplar.dto';

@Injectable()
export class ExemplarsRepository implements GenericRepository<ExemplarModel> {
  constructor(private readonly prisma: PrismaService) {}

  getById(id: number): Promise<ExemplarModel> {
    return this.prisma.exemplar.findUniqueOrThrow({ where: { id } });
  }

  getAll({
    skip,
    take,
    ...where
  }: ExemplarsQueryParamsDto): Promise<ExemplarModel[]> {
    return this.prisma.exemplar.findMany({ skip, take, where });
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
}
