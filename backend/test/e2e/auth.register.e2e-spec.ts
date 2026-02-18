// Arquivo de teste // Regra mental: *.e2e-spec.ts é “especificação de comportamento”, não infraestrutura


import { INestApplication } from '@nestjs/common';
import { createTestApp } from '../support/bootstrap';
import { postRegister } from '../support/requests/auth.requests';
import { makeRegisterPayload } from '../support/factories/user.factory';


describe('Auth Register (e2e)', () => { //agrupa testes do mesmo assunto
  let app: INestApplication;

  beforeAll(async () => {
    app = await createTestApp(); //sobe a aplicação para testes 
  });

  afterAll(async () => {
    await app.close(); // Fecha tudo (evita processo pendurado)

  });

  it('POST /auth/register — valid — 201', async () => {
    const payload = makeRegisterPayload();
    const res = await postRegister(app, payload).expect(201);

    expect(res.body).toHaveProperty('id');
    expect(res.body).toHaveProperty('email', payload.email);
    expect(res.body).toHaveProperty('createdAt');
    expect(res.body).not.toHaveProperty('password');
  });

  it('POST /auth/register — duplicate email — 409', async () => {
    const payload = makeRegisterPayload();

    await postRegister(app, payload).expect(201);
    await postRegister(app, payload).expect(409);
  });

  it('POST /auth/register — invalid payload — 400', async () => {
    const payload = makeRegisterPayload({
      email: 'email-invalido',
      password: '123',
    });

    await postRegister(app, payload).expect(400);
  });

});
