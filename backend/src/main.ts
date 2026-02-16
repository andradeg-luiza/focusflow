import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes( // Por que ValidationPipe global é uma decisão arquitetural?
    new ValidationPipe({ // Toda request da API inteira passa por validação (quando usar DTO)
      whitelist: true,
      // remove campos extras
      // Exemplo: você espera: { "email": "...", "password": "..." }
      // mas a request vem: { "email": "...", "password": "...", "role": "admin" }
      // Com whitelist: true:
      // o campo role é removido automaticamente
      // Isso reduz risco de “mass assignment” (injetar campos indevidos).
      forbidNonWhitelisted: true,
      // se vier campo extra, dá 400
      // Em vez de “remover e seguir”, ele bloqueia:
      // retorna 400 Bad Request
      // diz que veio campo não permitido
      // Mais seguro e mais explícito.
      // Trade-off:
      // é mais “chato” para clientes (mas você ainda está no MVP backend e isso é ótimo).
      transform: true, //transforma tipos quando necessário (útil mais pra frente)
      // Isso é útil quando você tiver DTO com:
      // @IsInt() e receber "123"
      // query params que chegam como string
      // Com transform: true, o Nest pode converter para o tipo esperado quando possível.
      // Trade-off: pode mascarar alguns erros, mas no geral é padrão sólido.
    }),
  );

  await app.listen(3000);
}
bootstrap();
