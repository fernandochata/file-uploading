import File from './models/File.js'
import bcrypt from 'bcrypt'

export const index = (req, res) => {
    res.render('index')
}

export const updateFile = async (req, res) => {
    const fileData = {
        path: req.file.path,
        originalName: req.file.originalname
    }
    if (req.body.password != null && req.body.password !== '') {
        fileData.password = await bcrypt.hash(req.body.password, 10)
    }
    const file = await File.create(fileData)
    res.render('index', { fileLink: `${req.headers.origin}/file/${file.id}` })
}

export async function handleDownload (req, res) {
    const file = await File.findById(req.params.id)

    if (file.password != null) {
        if (req.body.password == null) {
            res.render('download')
            return
        }
        
        if(!await bcrypt.compare(req.body.password, file.password)) {
            res.render('download', {error: true})
            return
        }
    }

    await file.save()
    res.download(file.path, file.originalName)
    //res.render('index')
}