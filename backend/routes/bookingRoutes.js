const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// Get all bookings (Admin only)
router.get('/', async (req, res) => {
    try {
        const bookings = await Booking.find().populate('service');
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new booking
router.post('/', async (req, res) => {
    const booking = new Booking({
        service: req.body.serviceId,
        date: req.body.date,
        time: req.body.time,
        address: req.body.address,
        contactDetails: {
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email
        }
    });

    try {
        const newBooking = await booking.save();
        res.status(201).json(newBooking);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update booking status
router.patch('/:id', async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (req.body.status) {
            booking.status = req.body.status;
        }
        const updatedBooking = await booking.save();
        res.json(updatedBooking);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a booking
router.delete('/:id', async (req, res) => {
    try {
        await Booking.findByIdAndDelete(req.params.id);
        res.json({ message: 'Booking deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
