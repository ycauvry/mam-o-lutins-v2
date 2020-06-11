const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChildSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        default: Date.now
    },
    address: {
        street_number: {
            type: String,
            required: true
        },
        street: {
            type: String,
            required: true
        },
        additional: {
            type: String
        },
        zip_code: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        }
    },
    contact: {
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        phone_number: {
            type: String,
            required: true
        }
    }
});

module.exports = Child = mongoose.model('child', ChildSchema);
