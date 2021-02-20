const express = require('express');
const router = express.Router();

//Alteration Model
const Alteration = require('../../models/Alteration');

// @route GET api/alteration
// @desc Get all alterations
router.get('/', (req, res) => {
    Alteration.find()
        .populate('contract')
        .then(alterations => res.json(alterations))
})

// @route GET api/alteration/:id
// @desc Get an alteration
router.get('/:id', (req, res) => {
    Alteration.findById(req.params.id)
        .populate('contract')
        .then(alteration => res.json(alteration))
        .catch(err => res.status(404).json({success: false, err}))
})

// @route POST api/alteration
// @desc Create an alteration
router.post('/', (req, res) => {
    const newAlteration = new Alteration(req.body)

    newAlteration.save()
        .then(alteration => res.json(alteration))
        .catch(err => res.status(400).json(err));
})

// @route PUT api/alteration
// @desc Update an alteration
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const update = req.body;
    Alteration.findOneAndUpdate(id, update, {new: true})
        .then(alteration => res.json({success: true, alteration}))
        .catch(err => res.status(400).json({success: false, err}))
})

// @route DELETE api/alteration/:id
// @desc Delete an alteration
router.delete('/:id', (req, res) => {
    Alteration.findById(req.params.id)
        .then(alteration => alteration.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false, err}))
})

module.exports = router;


