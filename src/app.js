import express from 'express'
//import multer from 'multer'
import 'dotenv/config'

import fileRoutes from './file.routes.js'

const PORT = process.env.PORT || 3000
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/file-uploader'

const app = express()

//const upload = multer({ dest: 'public/uploads/' })

app.set('view engine', 'ejs')

app.set('port', PORT)
app.set('mongodb_uri', MONGODB_URI)

app.use(express.urlencoded({ extended: true }))

app.use('/', fileRoutes)



export default app