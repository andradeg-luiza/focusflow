// como subir o app de teste
// Regra mental: bootstrap é infra. Se você começar a “colocar asserts” aqui, vira bagunça.



import { Test } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { AppModule } from '../../src/app.module';

export async function createTestApp(): Promise<INestApplication> { //
  const moduleRef = await Test.createTestingModule({ //
    imports: [AppModule], //
  }).compile(); // Sobe a aplicação inteira (DI, módulos, providers).


  const app = moduleRef.createNestApplication();

  // mesma validação do main.ts. evita erro de status
  app.useGlobalPipes( // Isso é crítico: sem isso seu teste de 400 poderia virar 201.

    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.init();
  return app;
}
