const express = require('express');
const app = express();
const bodyparsen = require('body-parser');
const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/user';
const User = require('./model/user.js');
// const Todo = require('./model/todo.js');

app.use(bodyparsen.json());
app.use(bodyparsen.urlencoded({extended: false}));

app.post('/api/user/login', (req, res) => {
	mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true }, function(err){
		if(err) throw err;
		  User.find({
        username: req.body.username, password: req.body.password
      }, function(err, user){
		    console.log(user);
		    if(user.length === 1) {
		      return res.status(200).json({
            status: true,
            data: user
          })
        } else {
		      return res.status(200).json({
            status: false,
            message: 'login fail'
          })
        }
      });
	});
  mongoose.set('useCreateIndex', true);
});

app.listen(3000, () => console.log('сервер запущен на 3000 порту'));
