import express, { Request, Response, NextFunction} from 'express';
import { dbHandler } from './dbHandler';
const db = new dbHandler();
const router = express.Router();

router.get('/now', async (req:Request, res:Response) => {
  try {
    const db_response = await db.currentData({temperature: true});
    return res.json(db_response);
  } catch (error) {
    res.status(500).send(error);
  }
})

router.get('/:amount', async (req:Request, res:Response) => {
  try {
    const db_response = await db.currentData({temperature:true, amountItems: parseInt(req.params.amount)});
    return res.json(db_response);
  } catch (error) {
    res.status(500).send(error);
  }
})

export default router;