const mongoose = require('mongoose');

const sportSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
},
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

const Sport = mongoose.model('Sport', sportSchema);

module.exports = Sport;