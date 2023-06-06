import express, { Request, Response, NextFunction} from 'express';

export default ((req:Request, res:Response, next:NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
})