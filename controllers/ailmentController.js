const db = require("../models")

module.exports = {
    findHeadache: function (req, res) {
        db.Ailments.find({ "Ailment": "Headache" })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    findHeadacheTreatment1: function (req, res) {

        db.Ailments.find({ "Ailment": "Headache" }).find({ "Treatment": "tablet1" })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    findHeadachePharm: function (req, res) {
        db.Ailments.find({ "Ailment": "Headache" }).find({ "Method": "Pharmaceutical" })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    findHeadacheNoPharm: function (req, res) {
        db.Ailments.find({ "Ailment": "Headache" }).find({ "Method": "Non-Pharmaceutical" })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    findBackpain: function (req, res) {
        db.Ailments.find({ "Ailment": "Backpain" })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    findBackpainPharm: function (req, res) {
        db.Ailments.find({ "Ailment": "Backpain" }).find({ "Method": "Pharmaceutical" })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    findBackpainNoPharm: function (req, res) {
        db.Ailments.find({ "Ailment": "Backpain" }).find({ "Method": "Non-Pharmaceutical" })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    findAlzheimers: function (req, res) {
        db.Ailments.find({ "Ailment": "Alzheimers" })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    findAlzheimersPharm: function (req, res) {
        db.Ailments.find({ "Ailment": "Alzheimers" }).find({ "Method": "Pharmaceutical" })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    findAlzheimersNoPharm: function (req, res) {
        db.Ailments.find({ "Ailment": "Alzheimers" }).find({ "Method": "Non-Pharmaceutical" })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    findDiabetes: function (req, res) {
        db.Ailments.find({ "Ailment": "Diabetes" })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    findDiabetesPharm: function (req, res) {
        db.Ailments.find({ "Ailment": "Diabetes" }).find({ "Method": "Pharmaceutical" })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    findDiabetesNoPharm: function (req, res) {
        db.Ailments.find({ "Ailment": "Diabetes" }).find({ "Method": "Non-Pharmaceutical" })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    findJointPains: function (req, res) {
        db.Ailments.find({ "Ailment": "JointPains" })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    findJointPainsPharm: function (req, res) {
        db.Ailments.find({ "Ailment": "JointPains" }).find({ "Method": "Pharmaceutical" })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    findJointPainsNoPharm: function (req, res) {
        db.Ailments.find({ "Ailment": "JointPains" }).find({ "Method": "Non-Pharmaceutical" })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    findAll: function (req, res) {
        db.Ailments.find({})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    findByEmail: function (req, res) {
        console.log(req.params)
        db.Ailments.find({ "Email": req.params.email })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    create: function (req, res) {
        db.Ailments
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    remove: function(req, res) {
        db.Ailments
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },

      UpdateById: function (req, res) {
        console.log(req.params)
        db.Ailments.findOneAndUpdate({ _id: req.params.id },
        {$inc: {likes: +1} })
            .then(dbModel => res.json(dbModel))
            .then(console.log("+1"))
            .catch(err => res.status(422).json(err))
    },



};