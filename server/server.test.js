const server = 'http://localhost:3000';
import { expect, test } from 'vitest';
import request from 'supertest';
// import dotenv from 'dotenv';

//enable provess.env
dotenv.config();

// Cookie value provided in /auth testing suite and used in /logs testing suite
// let cookieValue;

// auth testing when the post request is made with correct password
test('/auth responds to POST request with 200 status when provided with correct password', () => {
  return request(server)
    .post('/api/auth')
    .send({
      serverPassword: process.env.VITE_USER_PASSWORD,
    })
    .expect(200);
});

// auth testing when the post request is made with incorrect password
test('/auth responds to POST request with 401 status when provided with incorrect password', () => {
  return request(server)
    .post('/api/auth')
    .send({
      serverPassword: 'wrongPassword',
    })
    .expect(401);
});

// /task testing when a get request is made
test('/task responds to GET request with 200 status', () => {
  return request(server).get('/api/task').expect(200);
});
