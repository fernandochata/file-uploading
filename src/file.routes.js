import { Router } from 'express'
const router = Router()
import multer from 'multer'
import { index, updateFile, handleDownload } from './file.controllers.js'



const upload = multer({ dest: 'public/uploads' })

router.get('/', index)

router.post('/upload', upload.single('file'), updateFile)

router.get('/file/:id', handleDownload)

router.post('/file/:id', handleDownload)



export default router