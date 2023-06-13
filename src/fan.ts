import express, { Request, Response, NextFunction} from 'express';
const router = express.Router();

router.post('/on', (req, res) => {
  var gpiop = require('rpi-gpio').promise;
 
  gpiop.setup(7, gpiop.DIR_OUT)
    .then(() => {
        return gpiop.write(18, true)
    })
    .catch((err:any) => {
        console.log('Error: ', err.toString())
    })
})

router.post('/off', (req, res) => {
  var gpiop = require('rpi-gpio').promise;
 
  gpiop.setup(7, gpiop.DIR_OUT)
    .then(() => {
        return gpiop.write(18, false)
    })
    .catch((err:any) => {
        console.log('Error: ', err.toString())
    })
})

export default router