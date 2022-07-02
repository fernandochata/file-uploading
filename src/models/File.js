import mongoose from "mongoose";

const File = new mongoose.Schema({
    path: {
        type: String,
        required: true
    },
    originalName: {
        type: String,
        required: true
    },
    password: String
},{
    versionKey: false
})

export default mongoose.model('File', File)