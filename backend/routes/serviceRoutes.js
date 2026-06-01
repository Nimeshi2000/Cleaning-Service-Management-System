const express = require('express');
const router = express.Router();
const Service = require('../models/Service');

// Get all services
router.get('/', async (req, res) => {
    try {
        const services = await Service.find();
        res.json(services);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Seed services (for convenience)
router.post('/seed', async (req, res) => {
    const services = [
        {
            name: "Deep House Clean",
            description: "Thorough cleaning of every corner of your home, including hard-to-reach areas.",
            price: 150,
            image: "https://images.unsplash.com/photo-1581578731548-c64695cc6954?auto=format&fit=crop&q=80&w=800",
            category: "Residential"
        },
        {
            name: "Office Cleaning",
            description: "Professional cleaning for workspaces to ensure a productive environment.",
            price: 200,
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
            category: "Commercial"
        },
        {
            name: "Sofa Express",
            description: "Deep steam cleaning and stain removal for all types of fabric and leather sofas.",
            price: 80,
            image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=80&w=800",
            category: "Upholstery"
        },
        {
            name: "Window Cleaning",
            description: "Crystal clear windows with our streak-free professional cleaning service.",
            price: 60,
            image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=800",
            category: "Specialized"
        },
        {
            name: "Carpet Shampoo",
            description: "Revitalize your carpets with our deep cleaning shampoo and drying service.",
            price: 90,
            image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&q=80&w=800",
            category: "Specialized"
        },
        {
            name: "Kitchen Scrub",
            description: "Intensive degreasing and sanitization of kitchens, ovens, and appliances.",
            price: 120,
            image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800",
            category: "Residential"
        }
    ];

    try {
        await Service.deleteMany({});
        const createdServices = await Service.insertMany(services);
        res.status(201).json(createdServices);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
