import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Prisma, Exemplar } from '@prisma/client';

@Injectable()
export class ExemplarsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getById(
    exemplarWhereUniqueInput: Prisma.ExemplarWhereUniqueInput,
  ): Promise<Exemplar> {
    const exemplar = await this.prisma.exemplar.findUniqueOrThrow({
      where: exemplarWhereUniqueInput,
    });

    // ? findUniqueOrThrow can save this line, unless wanting to throw especial Error
    // if (!exemplar) {
    //   throw new NotFoundException();
    // }

    return exemplar;
  }

  async getAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ExemplarWhereUniqueInput;
    where?: Prisma.ExemplarWhereInput;
    orderBy?: Prisma.ExemplarOrderByWithRelationInput;
  }): Promise<Exemplar[]> {
    // ? Why not just use params? Our validate already "validated" what's in params, so there can't be unexpected property
    return await this.prisma.exemplar.findMany(params);

    // const { skip, take, cursor, where, orderBy } = params;

    // return await this.prisma.exemplar.findMany({
    //   skip,
    //   take,
    //   cursor,
    //   where,
    //   orderBy,
    // });
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
    // ? Same here, why not just use params
    return this.prisma.exemplar.update(params);

    // const { where, data } = params;

    // return this.prisma.exemplar.update({
    //   data,
    //   where,
    // });
  }

  remove(where: Prisma.ExemplarWhereUniqueInput) {
    return this.prisma.exemplar.delete({
      where,
    });
  }
}
