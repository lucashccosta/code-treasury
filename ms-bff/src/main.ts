import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { readFile } from 'fs/promises';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const swagger = JSON.parse((await readFile(join('swagger.json'))).toString('utf-8'));
  SwaggerModule.setup('/', app, swagger);
  await app.listen(3000);
}

bootstrap();
