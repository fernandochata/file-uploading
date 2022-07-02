import app from './app.js'
import mongoose from 'mongoose'

mongoose.connect(app.get('mongodb_uri'), (err) => {
    if (err) { console.error('Error connecting to MongoDB')
    } else { console.log('Connected to MongoDB') }
    })
            
app.listen(app.get('port'), () => {
    console.log(`Server running on http://localhost:${app.get('port')}`)
})


