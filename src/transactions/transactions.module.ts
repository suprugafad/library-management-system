import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { TransactionsRepository } from './transactions.repository';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TransactionsController],
  providers: [TransactionsService, TransactionsRepository],
})
export class TransactionsModule {}
