const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AssistantSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    }
});

module.exports = Assistant = mongoose.model('assistant', AssistantSchema);
