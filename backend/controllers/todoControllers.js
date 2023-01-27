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
 *  Adding a Task
 *  Editing a Task
 *  Deleting a task
 */


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
        const todoExist = await Todo.findById(todoId);

        //todo validation - check if todo exist
        if (!todoExist) {
            throw new Error("Todo does not exists")
        }

        //task validation - check if task exist
        const taskExist = todoExist.tasks.some(element => element._id == taskId);
        // returns true if task found
        if (!taskExist) {
            throw new Error("Task does not exists")
        }

        //editing the task
        const newTask = todoExist.tasks.map((element) => {
            if (element.id === taskId) {
                element.taskTitle = req.body.task;
            } else {
                // throw new Error("Task does not even exist")
                return element;
            }
            console.log(element);
        })

        //Updating existing Todo with the new Task
        todoExist.tasks = newTask;
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