const express = require("express");
const { home, createTodo, getAllTodos, editTodo, deleteTodo, addTask, editTask } = require("../controllers/todoControllers");
const router = express.Router();

router.get("/", home);
router.post("/createTodo", createTodo);
router.get("/getAllTodos", getAllTodos);
router.put("/editTodo/:id", editTodo);
router.delete("/deleteTodo/:id", deleteTodo);

//tasks
router.put("/addTask/:id", addTask);
router.put("/editTask/:todoId/:taskId", editTask);

module.exports = router;