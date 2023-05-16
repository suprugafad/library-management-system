import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService);
  const port = config.get<number>('APP_PORT');

  await app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
  });
}
bootstrap();
