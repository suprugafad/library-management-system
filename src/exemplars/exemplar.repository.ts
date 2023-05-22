import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Prisma, Exemplar } from '@prisma/client';

@Injectable()
export class ExemplarsRepository {
  constructor(private readonly prisma: PrismaService) {}

  getById(
    exemplarWhereUniqueInput: Prisma.ExemplarWhereUniqueInput,
  ): Promise<Exemplar> {
    return this.prisma.exemplar.findUniqueOrThrow({
      where: exemplarWhereUniqueInput,
    });
  }

  getAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ExemplarWhereUniqueInput;
    where?: Prisma.ExemplarWhereInput;
    orderBy?: Prisma.ExemplarOrderByWithRelationInput;
  }): Promise<Exemplar[]> {
    return this.prisma.exemplar.findMany(params);
  }

  create(data: Prisma.ExemplarCreateInput): Promise<Exemplar> {
    return this.prisma.exemplar.create({
      data,
    });
  }

  update(params: {
    where: Prisma.ExemplarWhereUniqueInput;
    data: Prisma.ExemplarUpdateInput;
  }): Promise<Exemplar> {
    return this.prisma.exemplar.update(params);
  }

  remove(where: Prisma.ExemplarWhereUniqueInput) {
    return this.prisma.exemplar.delete({
      where,
    });
  }
}
