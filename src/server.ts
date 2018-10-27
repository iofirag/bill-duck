import * as express from 'express';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { MongoConfig } from './config/mongo.config';
import mainRoutes from './routes';


const app: express.Application = express();

(async () => {
    app.use(cors());
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(mainRoutes);
    await new MongoConfig();
})();

const PORT: number = parseInt(process.env.PORT as string) || 3000;
app.listen(PORT, () => {
    console.log(`App is running at http://localhost:${PORT}/`);
});
