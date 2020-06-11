const express = require('express');
const router = express.Router();

//planning Model
const Planning = require('../../models/Planning');

// @route GET api/planning
// @desc Get all plannings
router.get('/', (req, res) => {
    Planning.find().then(plannings => res.json(plannings))
})

// @route GET api/planning/:id
// @desc Get an planning
router.get('/:id', (req, res) => {
    Planning.findById(req.params.id)
        .then(planning => res.json(planning))
        .catch(err => res.status(404).json({success: false, err}))
})

// @route POST api/planning
// @desc Create an planning
router.post('/', (req, res) => {
    const newPlanning = new Planning(req.body)

    newPlanning.save()
        .then(planning => res.json(planning))
        .catch(err => res.status(400).json(err));
})

// @route PUT api/planning
// @desc Update an planning
router.put('/:id', (req, res) => {
    const id = req.param.id;
    const update = req.body;
    Planning.findOneAndUpdate(id, update, {new: true})
        .then(planning => res.json({success: true, planning}))
        .catch(err => res.status(400).json({success: false, err}))
})

// @route DELETE api/planning/:id
// @desc Delete an planning
router.delete('/:id', (req, res) => {
    Planning.findById(req.params.id)
        .then(planning => planning.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false, err}))
})

module.exports = router;
