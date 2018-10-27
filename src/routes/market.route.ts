import * as express from 'express';
import { initAllMarkets } from '../controllers/market.controller';

export const marketRoutes: express.Router = express.Router();

marketRoutes.get('/initAllMarkets', initAllMarkets);