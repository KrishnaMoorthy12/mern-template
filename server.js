import express from 'express';
import Logger from 'js-logger';
import cors from 'cors';
import morgan from 'morgan';

import APIRouter from './api/router';
import APPRouter from './app/app';

const server = express();
const port = Number(process.env.PORT) || 5000;

// Show all logs when in development, only Warnings and errors in production
Logger.setLevel(process.env.NODE_ENV === 'production' ? Logger.ERROR : Logger.DEBUG);

server.use(express.json());
server.use(morgan('dev'));
server.use(cors());

server.use('/api', APIRouter);
server.use('/', APPRouter);

server.listen(port, () => Logger.info(`Server is running on port ${port}.`));
