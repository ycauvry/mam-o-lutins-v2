const express = require('express');
const router = express.Router();

//Contract Model
const Contract = require('../../models/Contract');

// @route GET api/contract
// @desc Get all contracts
router.get('/', (req, res) => {
    Contract.find()
        .populate('child assistant')
        .then(contracts => res.json(contracts));
})

// @route GET api/contract/:id
// @desc Get a contract
router.get('/:id', (req, res) => {
    Contract.findById(req.params.id)
        .populate('child assistant')
        .then(contract => res.json(contract))
        .catch(err => res.status(404).json({success: false, err}))
})

// @route POST api/contract
// @desc Create a contract
router.post('/', (req, res) => {
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']
    let schedules = {};
    const generateSchedules = (schedules, req, days, week) => {
        for (let i = 1; i <= week; i++) {
            schedules[`week${i}`] = {}
            for (const day of days) {
                schedules[`week${i}`][day] = {
                    start: req[`${day}${i}_start`] || null,
                    end: req[`${day}${i}_end`] || null
                }
            }
        }
    }
    if (req.body.planning === 'weekly') {
        generateSchedules(schedules, req.body, days, 1);
    } else if (req.body.planning === 'alternate_week') {
        generateSchedules(schedules, req.body, days, 2);
    } else {
        generateSchedules(schedules, req.body, days, 4);
    }
    console.log({...req.body, schedules});
    const newContract = new Contract({...req.body, schedules})

    newContract.save()
        .then(contract => res.json(contract))
        .catch(err => res.status(400).json(err));
})

// @route PUT api/contract
// @desc Update a contract
router.put('/:id', (req, res) => {
    const id = req.param.id;
    const update = req.body;
    Contract.findOneAndUpdate(id, update, {new: true})
        .then(contract => res.json({success: true, contract}))
        .catch(err => res.status(400).json({success: false, err}))
})

// @route DELETE api/contract/:id
// @desc Delete a contract
router.delete('/:id', (req, res) => {
    Contract.findById(req.params.id)
        .then(contract => contract.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false, err}))
})

module.exports = router;


