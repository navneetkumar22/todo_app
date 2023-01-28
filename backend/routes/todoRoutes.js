const express = require("express");
const { home, createTodo, getAllTodos, editTodo, deleteTodo, addTask, editTask, getAllTasks, deleteTask } = require("../controllers/todoControllers");
const router = express.Router();

router.get("/", home);
router.post("/createTodo", createTodo);
router.get("/getAllTodos", getAllTodos);
router.put("/editTodo/:id", editTodo);
router.delete("/deleteTodo/:id", deleteTodo);

//tasks
router.get("/getAllTasks/:id", getAllTasks);
router.put("/addTask/:id", addTask);
router.put("/editTask/:todoId/:taskId", editTask);
router.put("/deleteTask/:todoId/:taskId", deleteTask);

module.exports = router;