import express from 'express';
const app = express();
const PORT = 3000;
import temperature from './temperature'
import humidity from './humidity'
import data from './data'
import middleware from './middleware';
import fan from './fan';

app.use(middleware);
app.use('/data', data);
app.use('/humidity', humidity);
app.use('/temperature', temperature);
app.use('/fan', fan);




app.listen(PORT, () => {
  console.log("running")
})