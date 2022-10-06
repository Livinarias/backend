const {response} = require('express');
const Note = require('../models/notes_structure');

const CreateNote = async(req, res = response) => {

    const data = {...req.body};
    
    const date = new Date().toLocaleDateString();

    try {
       /* let note = await Note.findOne({ _id });

        if ( note ) {
            return res.status(400).json({
                ok: false,
                msg: 'Ya existe una nota con ese id'
            })
        }*/
        data.date = date;
        const note = new Note( data );

        await note.save();

        res.status(201).json({
            ok: true,
            msg: 'Nota Registrada'
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el Administrador'
        });
    }
}

module.exports = {
    CreateNote
}