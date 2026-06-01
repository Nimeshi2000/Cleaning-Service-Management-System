const mongoose = require('mongoose');
require('dotenv').config();
const Service = require('./models/Service');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/cleaning_service';

const services = [
  {
    name: 'Standard Home Cleaning',
    description: 'A comprehensive clean for your entire home. Includes dusting, vacuuming, mopping, and bathroom/kitchen sanitation. Perfect for regular upkeep.',
    price: 120,
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2670&auto=format&fit=crop',
    category: 'Home'
  },
  {
    name: 'Deep Cleaning',
    description: 'An intensive, top-to-bottom clean. Reaches the deep grime and dirt in your home. Includes baseboards, inside cabinets, and detailed appliance cleaning.',
    price: 250,
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=2574&auto=format&fit=crop',
    category: 'Home'
  },
  {
    name: 'Move-In/Move-Out',
    description: 'Make your transition smooth. A specialized deep clean designed to prepare a home for new tenants or restore it after moving out.',
    price: 300,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2670&auto=format&fit=crop',
    category: 'Specialized'
  },
  {
    name: 'Office Cleaning',
    description: 'Maintain a professional and hygienic workspace. Includes desk sanitization, trash removal, floor care, and common area cleaning.',
    price: 180,
    image: 'https://images.unsplash.com/photo-1616422329249-16a761ec8d80?q=80&w=2670&auto=format&fit=crop',
    category: 'Office'
  },
  {
    name: 'Sofa & Upholstery Express',
    description: 'Revive your furniture. Deep extraction cleaning to remove stains, odors, and allergens from sofas, chairs, and mattresses.',
    price: 90,
    image: 'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?q=80&w=2670&auto=format&fit=crop',
    category: 'Express'
  },
  {
    name: 'Post-Construction Clean',
    description: 'Remove the dust and debris left behind by renovations. A thorough cleaning to make your newly updated space ready for living.',
    price: 350,
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356f12?q=80&w=2574&auto=format&fit=crop',
    category: 'Specialized'
  }
];

mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log('Connected to MongoDB. Seeding services...');
    await Service.deleteMany({}); // Clear existing
    await Service.insertMany(services);
    console.log('Successfully seeded services!');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  });
