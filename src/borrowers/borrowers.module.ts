import { Module } from '@nestjs/common';
import { BorrowersService } from './borrowers.service';
import { BorrowersController } from './borrowers.controller';
import { BorrowersRepository } from './borrowers.repository';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [BorrowersController],
  providers: [BorrowersService, BorrowersRepository]
})

export class BorrowersModule {}
