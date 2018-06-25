import { Router } from "express";

import TodoController from "../controllers/TodoController";
import TodoItemController from "../controllers/TodoItemController";

const router = Router();

router.route("/api/v1/todos")
.post(TodoController.createTodo)
.get(TodoController.getTodos);

router.route("/api/v1/todos/:todoId")
.put(TodoController.updateTodos)
.delete(TodoController.deleteTodos);

// todo item routes
router.route("/api/v1/todos/:todoId/todoItems")
.post(TodoItemController.createTodoItem)
.get(TodoItemController.getTodoItems);

router.route("/api/v1/todos/:todoId/todoItems/:todoItemId")
.put(TodoItemController.updateTodoItems)
.delete(TodoItemController.deleteTodoItems);

export default router;