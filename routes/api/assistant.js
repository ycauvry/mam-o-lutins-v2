const express = require('express');
const router = express.Router();

//Assistant Model
const Assistant = require('../../models/Assistant');

// @route GET api/assistant
// @desc Get all assistants
router.get('/', (req, res) => {
    Assistant.find().then(assistants => res.json(assistants))
})

// @route GET api/assistant/:id
// @desc Get an assistant
router.get('/:id', (req, res) => {
    Assistant.findById(req.params.id)
        .then(assistant => res.json(assistant))
        .catch(err => res.status(404).json({success: false, err}))
})

// @route POST api/assistant
// @desc Create an assistant
router.post('/', (req, res) => {
    const {firstname, lastname} = req.body;
    const newAssistant = new Assistant({
        firstname,
        lastname
    })

    newAssistant.save()
        .then(assistant => res.json(assistant))
        .catch(err => res.status(400).json(err));
})

// @route PUT api/assistant
// @desc Update an assistant
router.put('/:id', (req, res) => {
    const id = req.param.id;
    const update = req.body;
    Assistant.findOneAndUpdate(id, update, {new: true})
        .then(assistant => res.json({success: true, assistant}))
        .catch(err => res.status(400).json({success: false, err}))
})

// @route DELETE api/assistant/:id
// @desc Delete an assistant
router.delete('/:id', (req, res) => {
    Assistant.findById(req.params.id)
        .then(assistant => assistant.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false, err}))
})

module.exports = router;
