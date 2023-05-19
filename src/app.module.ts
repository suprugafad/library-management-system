import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { configModuleOptions } from './config/config-module-options.config';
import { BorrowersModule } from './borrowers/borrowers.module';

@Module({
  imports: [ConfigModule.forRoot(configModuleOptions), BorrowersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
