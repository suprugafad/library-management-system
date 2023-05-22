import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { configModuleOptions } from './config/config-module-options.config';
import { BooksModule } from './books/books.module';
import { ExemplarsModule } from './exemplars/exemplars.module';

@Module({
  imports: [
    ConfigModule.forRoot(configModuleOptions),
    BooksModule,
    ExemplarsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
