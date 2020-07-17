const { Schema, model, Types } = require("mongoose")

const musicalbumsSchema = new Schema({
    title: {
        type: String, 
        required: true,
    },
    author: {
        type: String,
        required: true
    },
    albumcoverUrl: {
        type: String,
        required: true

    },
    tracks: [{
        title: {
            type: String, 
            required: true
        },
        trackUrl: {
            type: String,
            required: true
        }
    }]
})

module.exports = model("Musicalbums", musicalbumsSchema)