import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { createTestApp } from '../support/bootstrap';

describe('Auth Register (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    app = await createTestApp();
  });

  afterAll(async () => {
    await app.close();
  });

  it('POST /auth/register — valid — 201', async () => {
    const email = `luiza+${Date.now()}@example.com`;

    const res = await request(app.getHttpServer())
      .post('/auth/register')
      .send({
        email,
        password: 'SenhaForte123',
      })
      .expect(201);

    expect(res.body).toHaveProperty('id');
    expect(res.body).toHaveProperty('email', email);
    expect(res.body).toHaveProperty('createdAt');
    expect(res.body).not.toHaveProperty('password');
  });

  it('POST /auth/register — duplicate email — 409', async () => {
    const email = `luiza+dup+${Date.now()}@example.com`;

    await request(app.getHttpServer())
      .post('/auth/register')
      .send({
        email,
        password: 'SenhaForte123',
      })
      .expect(201);

    await request(app.getHttpServer())
      .post('/auth/register')
      .send({
        email,
        password: 'SenhaForte123',
      })
      .expect(409);
  });

  it('POST /auth/register — invalid payload — 400', async () => {
    await request(app.getHttpServer())
      .post('/auth/register')
      .send({
        email: 'email-invalido',
        password: '123',
      })
      .expect(400);
  });
});
