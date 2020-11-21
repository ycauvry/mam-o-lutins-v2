const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlanningSchema = new Schema({
    assistant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'assistant',
        required: true
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    }
})

module.exports = Planning = mongoose.model('planning', PlanningSchema);
