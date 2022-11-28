const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    images: {
        type: Array,
    },
    date: {
        type: Date,
        required: true
    },
},
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;

