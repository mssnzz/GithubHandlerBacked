import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GithubController } from './github/github.controller';
import { HttpModule } from '@nestjs/axios'; // 1. Importa HttpModule aquí
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      isGlobal: true, // Esto hará que ConfigService esté disponible globalmente
    }),
  ], // 2. Añade HttpModule a la lista de imports
  controllers: [AppController, GithubController],
  providers: [AppService],
})
export class AppModule {}
