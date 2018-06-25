import { Todo, TodoItem } from "../models";

const TodoController = {
  createTodo(req, res){
    console.log("I got here", req.body.title)
    return Todo.create({
      title: req.body.title
    })
    .then(todo => res.status(201).send({
      message: "Todo created",
      data: todo
    }))
    .catch(err =>
      res.status(500).send(err));
  },

  getTodos(req, res){
    return Todo.findAll({
      include: [{
        model: TodoItem,
        as: "todoItems"
      }]
    })
    .then(todos => {
      if(!todos) return res.status(200).send({
        message: "Todos Not found"})
      res.status(200).send(todos)})
    .catch(err =>
      res.status(500).send(err));
  },

  updateTodos(req, res) {
    Todo.findById(req.params.todoId)
    .then(todo => {
      if(!todo) return res.status(404).send({
        message: "Not found"
      })
      return todo.update({
        title: req.body.title
      })
    })
    .then(todo => res.status(200).send({
      message: "Todo Updated", todo}))
    .catch(err =>
      res.status(500).send(err));
  },

  deleteTodos(req, res) {
    Todo.findById(req.params.todoId)
    .then(todo => {
      if(!todo) return res.status(404).send({
        message: "Not found"
      })
      return todo.destroy()
    })
    .then(() => res.status(200).send({
      message: "Todo deleted"}))
    .catch(err =>
      res.status(500).send(err));
    }

};

export default TodoController;