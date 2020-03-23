const express = require('express')
const app = express()
const bodyparsen = require('body-parser')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/blogDb'

app.use(bodyparsen.json())
app.use(bodyparsen.urlencoded({extended: false}))

// app.get('/api/user/login', (req, res) => {
// 	res.send('hello world')
// })

app.post('/api/user/login', (req, res) => {
	mongoose.connect(url, function(err){
		if(err) throw err;
			console.log('соединение установлено, имя ', req.body.username, 'пароль ', req.body.password)
	})
})

app.listen(3000, () => console.log('сервер запущен на 3000 порту'))