const { response } = require('express');
const Notes = require('../models/notes_structure');

const ViewNotes = async(req, res = response ) => {

    const note = await Notes.find();
    
    res.json({
        "ok": true,
        "msg": [
            note.map(({ name, description, age, date, title}) =>
                ({
                "name": name,
                "title": title,
                "description": description,
                "age": age,
                "date": date
                })
            )
        ]
    });
}

module.exports = {
    ViewNotes
}