const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    homeTeam: {
        type: String,
        required: true
    },
    awayTeam: {
        type: String,
        required: true
    },
    homeScore: {
        type: Number,
        required: true
    },
    awayScore: {
        type: Number,
        required: true
    },
    sport: {
        type: mongoose.Schema.ObjectId,
        ref: 'Sport',
        required: true
    },
    report: {
        type: mongoose.Schema.ObjectId,
        ref: 'Report',
        required: true
    },
},
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

const Match = mongoose.model('Match', matchSchema);

module.exports = Match;
