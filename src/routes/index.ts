
import * as express from 'express';
import { userRoutes } from './user.route';
import { marketRoutes } from './market.route';
import { stockRoutes } from './stock.route';

export default express.Router()
    .use('/user', userRoutes)
    .use('/market', marketRoutes)
    .use('/stock', stockRoutes)
    // app.use('/log', require('../routes/log'));
    // app.use('/transaction', require('../routes/transaction'));
    // app.use('/statistics', require('../routes/statistics'));
    .use('/', (req, res) => {
        res.status(200).send({ hello: 'test' });
    })