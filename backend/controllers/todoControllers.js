const Todo = require("../models/todoModel")

//home routes
exports.home = (req, res) => {
    res.send("<h1>Hello world! This is the todo app</h1>");
}

//create a Todo
exports.createTodo = async (req, res) => {
    try {
        const { title } = req.body;

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
            todo
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
 *  Get All tasks
 *  Adding a Task
 *  Editing a Task
 *  Deleting a task
 */


// Get all tasks
exports.getAllTasks = async (req, res) => {
    try {
        const getTodo = await Todo.findById(req.params.id);

        //check if todo exists
        if (!getTodo) {
            throw new Error("Todo does not exist")
        }

        // get all tasks
        const allTasks = getTodo.tasks;
        res.status(200).json({
            success: true,
            message: "Tasks fetched successfully",
            allTasks
        })
    } catch (error) {
        console.log(error);
    }
}

// Add a task in the existing Todo
exports.addTask = async (req, res) => {
    try {

        const todoExists = await Todo.findById(req.params.id);

        //validation
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

//Edit a Task in the existing Todo
exports.editTask = async (req, res) => {
    try {

        const { todoId, taskId } = req.params;

        //todo validation - check if todo exist
        const todoExist = await Todo.findById(todoId);
        if (!todoExist) {
            throw new Error("Todo does not exists")
        }

        //task validation - check if task exist
        const taskExist = todoExist.tasks.some(element => element._id == taskId);
        if (!taskExist) {
            throw new Error("Task does not exists")
        }

        //find index of task and then edit the title
        const taskIndex = todoExist.tasks.findIndex((obj => obj._id == taskId));
        todoExist.tasks[taskIndex].taskTitle = req.body.task;

        //update the Todo with the new title
        const updatedTodo = await Todo.findByIdAndUpdate(todoId, todoExist);
        res.status(200).json({
            success: true,
            message: "Task is updated successfully",
            todoExist
        })

    } catch (error) {
        console.log(error);
    }
}

//Delete a Task
exports.deleteTask = async (req, res) => {
    try {
        const { todoId, taskId } = req.params;
        const todoExist = await Todo.findById(todoId);

        //check if todo exist
        if (!todoExist) {
            throw new Error("Todo does not exist")
        }

        //task validation - check if task exist
        const taskExist = todoExist.tasks.some(element => element._id == taskId);
        if (!taskExist) {
            throw new Error("Task does not exists")
        }

        //find index of task and then delete it - return updated todo
        const taskIndex = todoExist.tasks.findIndex((obj => obj._id == taskId));
        todoExist.tasks.splice(taskIndex, 1);

        const updatedTodo = await Todo.findByIdAndUpdate(todoId, todoExist);
        res.status(200).json({
            success: true,
            message: "Task deleted successfully",
            todoExist
        })
    } catch (error) {
        console.log(error);
    }
}