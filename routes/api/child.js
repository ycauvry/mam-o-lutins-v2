const express = require('express');
const router = express.Router();

//Child Model
const Child = require('../../models/Child');

// @route GET api/child
// @desc Get all children
router.get('/', (req, res) => {
    Child.find().then(children => res.json(children));
})

// @route GET api/child/:id
// @desc Get a child
router.get('/:id', (req, res) => {
    Child.findById(req.param.id)
        .then(child => res.json(child))
        .catch(err => res.status(404).json({success: false, err}))
})

// @route POST api/child
// @desc Create a child
router.post('/', (req, res) => {
    const {
        firstname, lastname, birthday, adress_street_number, adress_street, adress_additional, adress_zip_code,
        adress_city, contact_contactFirstname, contact_contactLastname, contact_phone_number
    } = req.body;

    const newChild = new Child({
        firstname,
        lastname,
        birthday,
        address: {
            street_number: adress_street_number,
            street: adress_street,
            additional: adress_additional,
            zip_code: adress_zip_code,
            city:adress_city
        },
        contact: {
            firstname: contact_contactFirstname,
            lastname: contact_contactLastname,
            phone_number: contact_phone_number
        }
    });

    newChild.save()
        .then(child => res.json(child))
        .catch(err => res.status(400).json(err));
})

// @route PUT api/child
// @desc Update a child
router.put('/:id', (req, res) => {
    const id = req.param.id;
    const update = req.body;
    Child.findOneAndUpdate(id, update, {new: true})
        .then(child => res.json({success: true, child}))
        .catch(err => res.status(400).json({success: false, err}))
})

// @route DELETE api/child/:id
// @desc Delete a child
router.delete('/:id', (req, res) => {
    Child.findById(req.params.id)
        .then(child => child.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false, err}))
})

module.exports = router;


