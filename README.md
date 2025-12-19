# Portfolio CMS Server

A **Node.js + Express + MongoDB** backend server for managing a personal portfolio using a **CMS (Content Management System)** approach. This server provides secure authentication and CRUD APIs to manage portfolio sections like **About, Skills, Projects, Services, Experience, Education, and Contact**.

---

## 🚀 Features

* 🔐 JWT-based Authentication (Admin Login)
* 👤 Role-based access (Admin protected routes)
* 🧩 Modular MVC structure
* 🗄️ MongoDB with Mongoose
* 🧠 CMS APIs for dynamic portfolio content
* 🌐 RESTful API design
* ⚙️ Environment-based configuration

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **Authentication:** JWT, bcrypt
* **Environment Variables:** dotenv
* **Middleware:** CORS, Express JSON

---

## 📁 Project Structure

```
portfolio-cms-server/
│
├── src/
│   ├── models/        # Mongoose schemas
│   ├── controllers/  # Business logic
│   ├── routes/       # API routes
│   ├── middleware/   # Auth middleware
│   └── seed/         # Admin seed data
│
├── .env               # Environment variables
├── server.js          # Entry point
├── package.json
└── README.md
```

---

## 🔐 Authentication Flow

1. Admin logs in using email & password
2. Server returns a **JWT token**
3. Token is stored in frontend (localStorage)
4. Protected CMS routes require token in headers

```
Authorization: Bearer <your_token>
```

---

## 📌 API Endpoints (Sample)

### Auth

* `POST /api/auth/login`

### CMS Sections

* `GET /api/cms/about`
* `POST /api/cms/about` 🔒
* `PUT /api/cms/about/:id` 🔒
* `DELETE /api/cms/about/:id` 🔒

(Similar routes for skills, projects, services, etc.)

🔒 = Protected (Admin only)

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```
PORT=5000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## ▶️ Run Locally

### 1️⃣ Install dependencies

```
npm install
```

### 2️⃣ Start server

```
npm start
```

or (for development)

```
npm run dev
```

Server will run on:

```
http://localhost:5000
```

---

## 🧪 Seed Admin (Optional)

You can seed default admin users using the seed script:

```
node src/seed/adminSeed.js
```

---

## 🌐 Frontend Integration

This backend is designed to work with a **React Portfolio CMS frontend** where:

* Home page dynamically displays portfolio data
* Admin dashboard manages content via CRUD
* Login required for admin actions

---

## 📌 Common Issues

* **401 Unauthorized** → Token missing or expired
* **Invalid URL** → Check frontend API base URL
* **MongoDB not connected** → Verify `MONGO_URL`

---

## 🙋 Author

**Sonali Priyadarshini**
Frontend & Full Stack Developer

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

Feel free to customize and extend it for your own portfolio 🚀
