# 💰 Finance Dashboard Backend

A scalable backend system for managing financial records with role-based access control, built using Node.js, Express, and MongoDB.

---

## 📌 Architecture Overview

This project follows a clean and modular backend architecture:

🔹 Key Points

* RESTful API design
* Role-Based Access Control (RBAC)
* JWT Authentication with bcrypt security
* MongoDB for persistent data storage
* Modular structure (MVC pattern)

---

## 🗂️ Database Schema Design

### 👤 Users Collection

```json
{
  "_id": "ObjectId",
  "name": "String",
  "email": "String (required, unique)",
  "password": "String (hashed)",
  "role": "viewer | analyst | admin",
  "isActive": "Boolean",
  "createdAt": "Date"
}
```
---

### 💰 Records Collection

```json
{
  "_id": "ObjectId",
  "amount": "Number",
  "type": "income | expense",
  "category": "String",
  "date": "Date",
  "notes": "String",
  "createdBy": "ObjectId (User)"
}
```
---

## 🚀 Features

✅ Secure Authentication (JWT + bcrypt)
✅ Role-Based Access Control (Viewer / Analyst / Admin)
✅ Financial Records CRUD Operations
✅ Dashboard Summary APIs
✅ MongoDB Data Persistence
✅ Clean Architecture (MVC Pattern)
✅ Error Handling & Validation

---

## 🔐 Roles & Permissions

| Role    | Permissions                          |
| ------- | ------------------------------------ |
| Viewer  | View records only                    |
| Analyst | View records + dashboard insights    |
| Admin   | Full access (CRUD + user management) |

---

## 📡 API Endpoints

### 🔐 Auth

* `POST /api/auth/register`
* `POST /api/auth/login`

### 👥 Users

* `GET /api/users` (Admin only)

### 💰 Records

* `GET /api/records` (All roles)
* `POST /api/records` (Admin only)
* `PUT /api/records/:id` (Admin only)
* `DELETE /api/records/:id` (Admin only)

### 📊 Dashboard

* `GET /api/dashboard/summary`

---

## ⚙️ Steps to Run the Application

### 1. Install Dependencies

```bash
npm install
```

---

### 2. Setup Environment Variables

Create `.env` file:

```env
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

---

### 4. Run Server

```bash
node server.js
```

---

## 🧪 Testing

Use Postman:

1. Register user
2. Login → get JWT token
3. Use token in headers:

```http
Authorization: Bearer <token>
```

4. Test APIs (records, dashboard)

---

## 📂 Project Structure

```bash
finance-backend/
│
├── controllers/
├── models/
├── routes/
├── middleware/
├── config/
├── app.js
└── server.js
```

---

## 📊 Key Highlights

* Clean and modular backend design
* Secure authentication using bcrypt
* Proper RBAC implementation
* Scalable architecture
* Real-world backend practices

---

## 🎯 Conclusion

This project demonstrates strong backend engineering skills including API design, authentication, authorization, data modeling, and structured application development.

---

## 👨‍💻 Author

**Kartik Patel**

🌐 Portfolio: https://kartik-patel-portfolio-pi.vercel.app/
💼 LinkedIn: http://www.linkedin.com/in/kartik-patel-2b6374268


