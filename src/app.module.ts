import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GithubController } from './github/github.controller';
import { HttpModule } from '@nestjs/axios'; // 1. Importa HttpModule aquí

@Module({
  imports: [HttpModule], // 2. Añade HttpModule a la lista de imports
  controllers: [AppController, GithubController],
  providers: [AppService],
})
export class AppModule {}
