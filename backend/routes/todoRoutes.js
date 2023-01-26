const express = require("express");
const { home, createTodo, getAllTodos, editTodo, deleteTodo, addTask } = require("../controllers/todoControllers");
const router = express.Router();

router.get("/", home);
router.post("/createTodo", createTodo);
router.get("/getAllTodos", getAllTodos);
router.put("/editTodo/:id", editTodo);
router.delete("/deleteTodo/:id", deleteTodo);

//tasks
router.put(`/addTask/:id`, addTask);

module.exports = router;