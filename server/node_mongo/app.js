const express = require('express');
const app = express();
const bodyparsen = require('body-parser');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/blogDb';
const User = require('./model/user.js');
const Todo = require('./model/todo.js');

app.use(bodyparsen.json());
app.use(bodyparsen.urlencoded({extended: false}));

app.post('/api/user/login', (req, res) => {
	mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true }, function(err){
		if(err) throw err;
		  User.find({
        username: req.body.username, password: req.body.password
      }, function(err, user){
		    if(user.length === 1) {
		      return res.status(200).json({
            status: 'success',
            data: user
          })
        } else {
		      return res.status(200).json({
            status: 'fail',
            message: 'login fail'
          })
        }
      });
			// console.log('соединение установлено, имя: ', req.body.username, 'пароль: ', req.body.password)
	})
});

app.get('/todo', (req, res) => {

});

app.listen(3000, () => console.log('сервер запущен на 3000 порту'));
