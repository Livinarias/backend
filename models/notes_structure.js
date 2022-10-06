const { Schema, model} = require('mongoose');

const NoteShema = Schema({
    name: {
        type: String,
        require: true
    },
    title: {
        type: String,
        unique: true,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    date: {
        type: String,
        require: false
    },
    age: {
        type: String,
        require: true
    }
});

module.exports = model('Notes', NoteShema);