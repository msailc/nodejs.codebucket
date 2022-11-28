const Report = require("../models/reportModel");
const APIFeatures = require("../utils/apiFeatures");

exports.getAllReports = async (req, res) => {
    try {
        const features = new APIFeatures(Report.find(), req.query)
            .filter()
            .sort()
            .limitFields()
            .paginate();
        const reports = await features.query;

        res.status(200).json({
            status: "success",
            results: reports.length,
            data: {
                reports,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
}

exports.getReport = async (req, res) => {
    try {
        const report = await Report.findById(req.params.id);

        res.status(200).json({
            status: "success",
            data: {
                report,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
}

exports.createReport = async (req, res) => {
    try {
        const newReport = await Report.create(req.body);

        res.status(201).json({
            status: "success",
            data: {
                report: newReport,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
}

exports.deleteReport = async (req, res) => {
    try {
        await Report.findByIdAndDelete(req.params.id);

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

exports.updateReport = async (req, res) => {
    try {
        const report = await Report.findByIdAndUpdate(req.params, req.body, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({
            status: "success",
            data: {
                report,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
}
