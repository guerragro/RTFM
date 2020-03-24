const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  todo: String,
  id: Number,
  complete: {
    type: Boolean,
    default: false
  },
  edit: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('TODO', todoSchema);
// db.todolist.insertMany([
// 	{
// 		todo: "Решить проблему присвоение id",
// 		id: 1,
// 		complete: false,
// 		edit: false
// },
// 	{
// 		todo: "Решить проблему редактирование задачи",
// 		id: 2,
// 		complete: false,
// 		edit: false
// },
// 	{
// 		todo: "Добавить счетчик активных задач",
// 		id: 3,
// 		complete: false,
// 		edit: false
// },
// 	{
// 		todo: "Поправить структуру и код",
// 		id: 4,
// 		complete: false,
// 		edit: false
// },
// ])
