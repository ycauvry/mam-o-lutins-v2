const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlterationSchema = new Schema({
    contract_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
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
    comment: {
        type: String
    }
});

module.exports = Alteration = mongoose.model('alteration', AlterationSchema);
