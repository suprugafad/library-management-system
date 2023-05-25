import { Module } from '@nestjs/common';
import { ExemplarsService } from './exemplars.service';
import { ExemplarsController } from './exemplars.controller';
import { ExemplarsRepository } from './exemplar.repository';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ExemplarsController],
  providers: [ExemplarsService, ExemplarsRepository],
  exports: [ExemplarsService],
})
export class ExemplarsModule {}
