import { TodoItem } from "../models";

const TodoItemController = {
  createTodoItem(req, res){
    console.log("I got here", req.body.title)
    return TodoItem.create({
      content: req.body.content,
      todoId: req.params.todoId
    })
    .then(todoItem => res.status(201).send({
      message: "TodoItem created",
      data: todoItem
    }))
    .catch(err =>
      res.status(500).send(err));
  },

  getTodoItems(req, res){
    return TodoItem.findAll({
      where: {
        todoId: req.params.todoId
      }
    })
    .then(todoItems => {
      if(!todoItems) return res.status(200).send({
        message: "TodoItems Not found"})
      res.status(200).send(todoItems)})
    .catch(err =>
      res.status(500).send(err));
  },

  updateTodoItems(req, res) {
    TodoItem.findOne({
      where: {
        todoId: req.params.todoId,
        id: req.params.todoItemId
      }
    })
    .then(todoItem => {
      if(!todoItem) return res.status(404).send({
        message: "Not found"
      })
      return todoItem.update({
        title: req.body.content,
        completed: req.body.completed
      })
    })
    .then(todoItem => res.status(200).send({
      message: "TodoItem Updated", todo}))
    .catch(err =>
      res.status(500).send(err));
  },

  deleteTodoItems(req, res) {
    TodoItem.findOne({
      where: {
        todoId: req.params.todoId,
        id: req.params.todoItemId
      }
    })
    .then(todoItem => {
      if(!todoItem) return res.status(404).send({
        message: "Not found"
      })
      return todo.destroy()
    })
    .then(() => res.status(200).send({
      message: "TodoItem deleted"}))
    .catch(err =>
      res.status(500).send(err));
    }

};

export default TodoItemController;