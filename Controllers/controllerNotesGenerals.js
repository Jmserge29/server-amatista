const NotesG = require('../Models/NotesGenerals')



createNote = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a note',
        })
    }

    const note = new NotesG(body)

    if (!note) {
        return res.status(400).json({ success: false, error: err })
    }

    note
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: note._id,
                message: 'note created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'note not created!',
            })
        })
}

updateNote = async (req, res) => {
    const NotesGUpdated = await NotesG.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    res.status(200).json(NotesGUpdated)
}

updateNoteId = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    note.findOne({ collectionUniversity: req.params.collectionUniversity }, (err, note) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'note not found!',
            })
        }

        note.titulo = body.titulo
        note.estado = body.estado
        note.descripcion = body.descripcion
        note.fecha = body.fecha
        note.collectionUniversity = body.collectionUniversity
        
        note
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    identificador: note.identificador,
                    message: 'note updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'note not updated!',
                })
            })
    })
}


deleteNote = async (req, res) => {
    await NotesG.findOneAndDelete({ _id: req.params.id }, (err, note) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!note) {
            return res
                .status(404)
                .json({ success: false, error: `note not found` })
        }

        return res.status(200).json({ success: true, data: note })
    }).catch(err => console.log(err))
}

deleteNoteId = async (req, res) => {
    await NotesG.findOneAndDelete({ collectionUniversity: req.params.collectionUniversity }, (err, note) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!note) {
            return res
                .status(404)
                .json({ success: false, error: `note not found` })
        }

        return res.status(200).json({ success: true, data: note })
    }).catch(err => console.log(err))
}

getNoteById = async (req, res) => {
    await NotesG.findOne({ _id: req.params.id }, (err, note) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
    }

        return res.status(200).json({ success: true, data: note })
    }).catch(err => console.log(err))
}

getNoteByIden = async (req, res) => {
    await NotesG.findOne({ identificador: req.params.identificador }, (err, note) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: note })
    }).catch(err => console.log(err))
}

getNoteByCollectionUniversity = async (req, res) => {
    await NotesG.find({ collectionUniversity: req.params.collectionUniversity }, (err, note) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: note })
    }).catch(err => console.log(err))
}

getNotes = async (req, res) => {
    await NotesG.find({}, (err, collections) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!collections.length) {
            return res
                .status(404)
                .json({ success: false, error: `collections not found` })
        }
        return res.status(200).json({ success: true, data: collections })
    }).catch(err => console.log(err))
}

Dashboard = async (req, res) => {
    // Obtengo la data de las notas asignadas a esa collection, notes = data 
    const notes = await NotesG.find({ collectionUniversity: req.params.collectionUniversity });
    // Aquí le asigno la cantidad total de notas utilizando el vector de la data midiendo su longitud
    const cant_notes= notes.length
    // Mapeo los vectores de las notas para la cantidad total de materias que tiene en un determinado día de la semana
    var cant = notes.filter(o => o.estado).length;

    res.status(201).json({message: true, notas: cant_notes, activas: cant})
    // res.json(materias)
}



module.exports = {
    createNote,
    updateNote,
    updateNoteId,
    deleteNote,
    deleteNoteId,
    getNoteById,
    getNoteByIden,
    getNoteByCollectionUniversity,
    getNotes,
    Dashboard
}