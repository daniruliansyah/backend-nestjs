import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from './../src/app.module';

// Jurus Pamungkas: Pakai require agar tidak error "not a function"
const request = require('supertest');

describe('Authentication System (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/auth/login (POST) - Harus dapat Token', async () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({
        email: 'dani@gmail.com', // Pastikan email ini BENAR ada di DB
        password: 'dani123',     // Pastikan password ini BENAR
      })
      .expect(201)
      .expect((res) => {
        if (!res.body.access_token) {
          throw new Error('Token tidak ditemukan!');
        }
      });
  });

  it('/auth/login (POST) - Harus Error 401 jika password salah', async () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({
        email: 'dani@gmail.com',
        password: 'password_ngawur',
      })
      .expect(401);
  });

  // Pastikan aplikasi ditutup agar terminal tidak macet
  afterAll(async () => {
    await app.close();
  });
});