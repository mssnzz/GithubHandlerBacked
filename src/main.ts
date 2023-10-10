import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS
  app.enableCors({
    origin: 'https://githubsystem.vercel.app/, localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
  });

  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') || 3000; // Si no se encuentra el PORT en .env, se usará 3000 por defecto

  await app.listen(port);
}

bootstrap();
