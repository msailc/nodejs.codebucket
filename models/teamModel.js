const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A team must have a name'],
    },
    city: {
        type: String,
        required: [true, 'A team must have a city'],
    },
    country: {
        type: String,
        required: [true, 'A team must have a country'],
    },
    logo: {
        type: String,
    },
    founded: {
        type: Number,
    },
    shortdescription: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    }, 
    {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    });

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;