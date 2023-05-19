import { Module } from '@nestjs/common';
import { BorrowersService } from './borrowers.service';
import { BorrowersController } from './borrowers.controller';

import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [BorrowersController],
  providers: [BorrowersService, PrismaService]
})

export class BorrowersModule {}
