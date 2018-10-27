import * as express from 'express';

export const getAllUsers = async (req: express.Request, res: express.Response) => {
    return res.json({success: 1, data: [{a:22},{b:33}] })
}
export const createUser = async (req: express.Request, res: express.Response) => {

}