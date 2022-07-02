import File from './models/File.js'
import bcrypt from 'bcrypt'

export async function handleDownload(req, res) {
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

    file.downloadCount++
    await file.save()
    res.download(file.path, file.originalName)
}