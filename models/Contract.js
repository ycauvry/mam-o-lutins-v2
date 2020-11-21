const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContractSchema = new Schema({
    child: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'child',
    },
    assistant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'assistant'
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    schedules: {
        monday: {
            start: {
                type: String
            },
            end: {
                type: String
            }
        },
        tuesday: {
            start: {
                type: String
            },
            end: {
                type: String
            }
        },
        wednesday: {
            start: {
                type: String
            },
            end: {
                type: String
            }
        },
        thursday: {
            start: {
                type: String
            },
            end: {
                type: String
            }
        },
        friday: {
            start: {
                type: String
            },
            end: {
                type: String
            }
        }
    },
    type: {
        type: String,
        required: true
    },
    planning: {
        type: String
    },
    holidays_week: {
        type: Number
    },
    status: {
        type: String,
        default: 'active'
    }
})

module.exports = Contract = mongoose.model('contract', ContractSchema);
