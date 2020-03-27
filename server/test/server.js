const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const url = 'mongodb://127.0.0.1:27017/todo';
const port = 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('роутинг: ' + ' /api/todo')
  // res.writeHead(200, {'Content-Type': 'text/plain'});
  // var myReadShot = fs.createReadStream(__dirname + '/article.txt', 'utf8');
  // // var myWriteShot = fs.createWriteStream(__dirname + '/new.txt');
  // myReadShot.pipe(res)
});
app.get('/api/todo', (req, res) => {
  // res.setHeader("Access-Control-Allow-Origin", "*");
  // res.send('get request to the homepage');
  // res.status(200).json([{
  //   message: 'держи список'
  // }])
});
//
// app.post('/api/todo', (req, res) => {
//   console.log(req);
//   // res.setHeader("Access-Control-Allow-Origin", "*");
//   // res.send('post request to the homepage');
//   res.status(200).json({message: 'saves'})
// });

app.listen(port, () => {
  console.log(`server running in port ${port}`)
});

