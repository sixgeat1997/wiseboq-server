import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const configService: ConfigService = app.get(ConfigService);

  const port = process.env.PORT || configService.get<number>('PORT');
  console.log(port);

  app.enableCors();
  await app.listen(port, () => {
    console.log(`app is listen port: ${port}`);
  });
}
bootstrap();
