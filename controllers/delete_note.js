const { response } = require('express');
const Note = require('../models/notes_structure');

const DeleteNote = async(req, res = response) => {

    const { title } =  req.body;
    const note = await Note.findOne({title});
    
    try {
        if ( !note ) {
            return res.status(400).json({
                ok: false,
                msg: 'No existe una nota con ese parámetros'
            })
        }

        await Note.deleteOne(note);

        res.status(200).json({
            ok: true,
            msg: 'Nota Eliminada'
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
    DeleteNote
}