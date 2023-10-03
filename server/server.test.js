const server = 'http://localhost:3000';
import { expect, test } from 'vitest';
import request from 'supertest';
import dotenv from 'dotenv';

//enable provess.env
dotenv.config();

// Cookie value provided in /auth testing suite and used in /logs testing suite
let cookieValue;

test('/auth responds to POST request with 200 status when provided with correct password', () => {
  return request(server)
    .post('/api/auth')
    .send({
      serverPassword: process.env.VITE_USER_PASSWORD,
    })
    .expect(200);
});
