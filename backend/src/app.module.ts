import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
// AppController e AppService
// Esses são os componentes default do projeto Nest.
// Eles vivem no módulo raiz porque:
// são exemplos
// ou lógica global inicial


import { AuthModule } from './auth/auth.module'; // Diz ao Nest existe um módulo chamado AuthModul
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
  ],  
  controllers: [AppController], // Quais controllers pertencem ao root
  providers: [AppService], // Quais services pertencem ao root
})
export class AppModule {}
