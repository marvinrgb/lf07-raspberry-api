import express from 'express';
const app = express();
const PORT = 3000;
import temperature from './temperature'
import humidity from './humidity'
import data from './data'
import middleware from './middleware';

app.use(middleware);
app.use('/data', data);
app.use('/humidity', humidity);
app.use('/temperature', temperature);








app.listen(PORT, () => {
  console.log("running")
})