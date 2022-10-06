const { response } = require('express');
const Note = require('../models/notes_structure');


const EditNote = async( req, res = response) => {

    const {title} =  req.body;
    const note = await Note.findOne({title});
    
    try {
        if ( !note ) {
            return res.status(400).json({
                ok: false,
                msg: 'No existe una nota con ese parámetros'
            })
        }
        const updateNote = req.body;

        await Note.updateOne(note, updateNote);

        res.status(202).json({
            ok: true,
            msg: 'Nota Actualizada'
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
    EditNote
}