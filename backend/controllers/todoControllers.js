const Todo = require("../models/todoModel")

//home routes
exports.home = (req, res) => {
    res.send("<h1>Hello world! This is the todo app</h1>");
}

//create a Todo route
exports.createTodo = async (req, res) => {
    try {
        const { title } = req.body;
        // const tasks = [];


        //validate
        if (!title) {
            throw new Error("Title is required");
        }

        const todo = await Todo.create({ title });
        res.status(200).json({
            success: true,
            message: "A todo is successfully created",
            todo
        })

    } catch (error) {
        console.log(error);
    }
}

//get all Todos
exports.getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json({
            success: true,
            todos
        })
    } catch (error) {
        console.log();
    }
}

//Edit a Todo
exports.editTodo = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            success: true,
            message: "Todo updateded successfully",
        })
    } catch (error) {
        console.log(error);
    }
}

//delete a todo
exports.deleteTodo = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            message: "Todo deleted successfully"
        })
    } catch (error) {
        console.log(error);
    }
}

/**
 *  Adding a Task
 *  Deleting a task
 */

// Add a task in the existing todo
exports.addTask = async (req, res) => {
    try {

        const todoExists = await Todo.findById(req.params.id);
        if (!todoExists) {
            throw new Error("Todo does not exist");
        }

        todoExists.tasks.push({ taskTitle: req.body.task });

        const todo = await Todo.findByIdAndUpdate(req.params.id, todoExists);
        res.status(200).json({
            success: true,
            message: "Tasks added successfully",
            todo
        })

    } catch (error) {
        console.log(error);
    }
}