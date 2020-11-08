const { number, string } = require('@hapi/joi');
const mongoose = require('mongoose');
const PostSchema = mongoose.Schema({
    Request_id: {
        type: String,
        required: true
    },
    Tourist_name: {
        type: String,
        required: true
    },

    Start_date: {
        type: Date,
        required: true
    },
    End_date: {
        type: Date,
        required: true
    },
    Destination: {
        type: String,
        required: true

    },
    list: {
        type: String,
        required: true

    }

})
module.exports = mongoose.model('schema', PostSchema);