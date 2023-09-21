import request from 'supertest';
import express from 'express';
import uploadRouter from '../routes/upload.js';
import path from 'path';

const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.use('/', uploadRouter);

test('GET / should render upload page', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
});
