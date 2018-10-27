import * as express from 'express';
import { initAllStocks } from '../controllers/stock.controller';

export const stockRoutes: express.Router = express.Router();

stockRoutes.get('/initAllStocks', initAllStocks);