const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const TodoSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        maxLength: [40, "Maximum length of title is 40 characters"],
        unique: true
    },
    tasks: [{
        taskTitle: String
    }]
}, {
    timestamps: true
})

module.exports = mongoose.model("Todo", TodoSchema);

