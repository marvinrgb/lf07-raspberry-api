import express from 'express';
import mysql from 'mysql2';
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
})



const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'humiture'
})






app.get('/data', (req, res) => {
  try {
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'humiture'
    })
    connection.query(
      `SELECT * FROM data`, 
      function (err, results, fields) {
        res.json(results);
    })
    connection.end();
  } catch (error) {
    res.send(error)
  }
})

app.get('/temp', (req, res) => {
  try {
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'humiture'
    })
    connection.query(
      `SELECT * FROM data`, 
      function (err, results, fields) {
        let data = {
          labels: [],
          datasets: [{data: []}]
        }

        for (let i = 0; i < results.length; i++) {
          data.labels.push(results[i].time);
          data.datasets[0].data.push(results[i].temperature);
        }

        res.json(data);
    })
    connection.end();
  } catch (error) {
    res.send(error)
  }
})

app.listen(PORT, () => {
  console.log("running")
})