const { Schema, model, Types } = require("mongoose")

const myOwnPlayListsSchema = new Schema({

    title: String,

    description: String,

    playlistcoverUrl: String,

    tracks: [{

        title: {
            type: String, 
            required: true
        },

        author: {
            type: String,
            required: true
        },

        trackUrl: {
            type: String,
            required: true
        }
    }]
})

module.exports = model("MyOwnPlayLists", myOwnPlayListsSchema)