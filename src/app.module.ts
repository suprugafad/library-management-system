import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { configModuleOptions } from './config/config-module-options.config';
import { BooksModule } from './books/books.module';
import { TransactionsModule } from './transactions/transactions.module';
import { BorrowersModule } from './borrowers/borrowers.module';
import { ExemplarsModule } from './exemplars/exemplars.module';
import { ReportsModule } from './reports/reports.module';

@Module({
  imports: [
    ConfigModule.forRoot(configModuleOptions),
    BooksModule,
    TransactionsModule,
    ExemplarsModule,
    BorrowersModule,
    ReportsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
