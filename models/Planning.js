const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlanningSchema = new Schema({
    assistant_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Assistant',
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
