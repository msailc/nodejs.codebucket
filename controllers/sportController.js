const Sport = require("../models/sportModel");
const APIFeatures = require('../utils/apiFeatures');

exports.getAllSports = async (req, res) => {
    try {
        const features = new APIFeatures(Sport.find(), req.query)
            .filter()
            .sort()
            .limitFields()
            .paginate();
        const sports = await features.query;

        res.status(200).json({
            status: "success",
            results: sports.length,
            data: {
                sports,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
}

exports.getSport = async (req, res) => {
    try {
        const sport = await Sport.findById(req.params.id);

        res.status(200).json({
            status: "success",
            data: {
                sport,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
}

exports.createSport = async (req, res) => {
    console.log(req.body);
    try {
        const newSport = await Sport.create(req.body);
        newSport.save();

        res.status(201).json({
            status: "success",
            data: {
                sport: newSport,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
}

exports.updateSport = async (req, res) => {
    try {
        const sport = await Sport.findByIdAndUpdate(req.params, req.body, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({
            status: "success",
            data: {
                sport,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
}

exports.deleteSport = async (req, res) => {
    try {
        await Sport.findByIdAndDelete(req.params.id);

        res.status(204).json({
            status: "success",
            data: null,
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
}