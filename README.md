Cleaning Service Management System

A full-stack web application for managing cleaning service bookings online. Users can browse services, book appointments, and admins can manage all bookings through a protected dashboard.


  Project Structure

```
Cleaning-Service-Management-System/
├── frontend/          # React.js application
├── backend/           # Node.js + Express.js REST API
└── README.md
```

---

  Features

 Home Page — Hero banner with Book Now CTA and About Us section
Services Menu — Dynamic listing of 6–8 cleaning categories fetched from the database
Online Booking System — Full form with service selection, date/time picker, address & contact
Admin Dashboard — Protected `/admin` route to view, complete, or delete bookings
Gallery & Reviews — Grid of cleaned space images and customer reviews
Contact & Footer — Google Map, WhatsApp button, email & phone

---

 Tech Stack

| Layer      | Technology                  |
|------------|-----------------------------|
| Frontend   | React.js, Tailwind CSS      |
| Backend    | Node.js, Express.js         |
| Database   | MongoDB                     |

---

 Quick Start

 Clone the Repository

 bash
git clone https://github.com/Nimeshi2000/Cleaning-Service-Management-System.git
cd Cleaning-Service-Management-System


2. Setup Backend

```bash
cd backend
npm install
# Add your .env file (see backend/README.md)
npm start
```

 3. Setup Frontend

```bash
cd frontend
npm install
npm start
```

> See [`frontend/README.md`](./frontend/README.md) and [`backend/README.md`](./backend/README.md) for detailed setup instructions.

---

 API Overview

| Method | Endpoint              | Description                  |
|--------|-----------------------|------------------------------|
| GET    | `/api/services`       | Get all cleaning services    |
| POST   | `/api/bookings`       | Submit a new booking         |
| GET    | `/api/bookings`       | Get all bookings (Admin)     |
| PATCH  | `/api/bookings/:id`   | Mark booking as completed    |
| DELETE | `/api/bookings/:id`   | Delete a booking             |

> Full API documentation in [`backend/README.md`](./backend/README.md)

---

 Author

Nimeshi2000**
GitHub: [@Nimeshi2000](https://github.com/Nimeshi2000)

