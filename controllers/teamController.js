const Team = require('../models/teamModel');
const APIFeatures = require('../utils/apiFeatures');

exports.getAllTeams = async (req, res) => {
    try {
        const features = new APIFeatures(Team.find(), req.query)
            .filter()
            .sort()
            .limitFields()
            .paginate();
        const teams = await features.query;

        res.status(200).json({
            status: 'success',
            results: teams.length,
            data: {
                teams,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
}

exports.getTeam = async (req, res) => {
    try {
        const team = await Team.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                team,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
}

exports.createTeam = async (req, res) => {
    try {
        const newTeam = await Team.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                team: newTeam,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        });
    }
}

exports.updateTeam = async (req, res) => {
    try {
        const team = await Team.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        res.status(200).json({
            status: 'success',
            data: {
                team,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
}

exports.deleteTeam = async (req, res) => {
    try {
        await Team.findByIdAndDelete(req.params.id);

        res.status(204).json({
            status: 'success',
            data: null,
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
}
