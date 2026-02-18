// centralizar a chamada HTTP da rota 
// //Regra mental: requests helper só sabe “como chamar”, não sabe “o que esperar”
// evita repetir .getHttpServer().post('/auth/register').send(...)
// quando você mudar a rota no futuro (ex: /v1/auth/register), você altera em 1 lugar
// mantém os testes mais limpos


import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

export type RegisterPayload = { email: string; password: string };

export function postRegister(app: INestApplication, payload: RegisterPayload) {
  return request(app.getHttpServer())
    .post('/auth/register')
    .send(payload);
}
