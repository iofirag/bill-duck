import * as express from 'express';
import { getAllUsers, createUser } from '../controllers/user.controller';


export const userRoutes: express.Router = express.Router();

userRoutes.get('/getAllUsers', getAllUsers);

userRoutes.post('/createUser', createUser);