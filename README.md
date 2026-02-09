# angular-jwt-auth-app
# Full-Stack User Registration & Login Application

A complete **full-stack authentication system** built using **Angular** for the frontend, **Node.js (Express)** for the backend, and a **SQL database** (MySQL/PostgreSQL).  
This project implements secure **User Registration** and **User Login** with proper validations, password hashing, and **JWT-based authentication**, following industry best practices.

---

## 📌 Project Objective

To design and develop a full-stack web application that allows users to:
- Register with validated personal details
- Log in securely using encrypted credentials
- Authenticate using JWT tokens
- Store user data safely in a relational database

---

## 🚀 Features

### 🔹 Frontend (Angular)
- User Registration screen
- User Login screen
- Reactive forms with validations
- Password and confirm-password matching
- Real-time error messages
- Loading and success feedback
- Clean and responsive UI

### 🔹 Backend (Node.js + Express)
- RESTful authentication APIs
- Password hashing using **bcrypt**
- JWT token generation on login
- Input validation and error handling
- Unique email verification

### 🔹 Database (SQL)
- Structured relational schema
- Secure password storage
- Automatic timestamps for user records

---

## 🛠️ Technology Stack

**Frontend**
- Angular
- TypeScript
- HTML, CSS

**Backend**
- Node.js
- Express.js
- bcrypt
- JSON Web Token (JWT)

**Database**
- MySQL / PostgreSQL

**Tools**
- Postman (API testing)

---

## 📁 Application Modules

- User Registration
- User Login
- Authentication & Authorization
- Input Validation
- Error Handling

---

## 🧾 User Registration Fields & Validations

| Field | Validation Rules |
|------|------------------|
| Full Name | Required, minimum 3 characters |
| Email | Required, valid format, unique |
| Date of Birth | Required |
| Country | Required |
| State | Required |
| City | Required |
| Address | Required |
| Phone Number | Required, 10–15 digits |
| Password | Required, minimum 8 characters, alphanumeric |
| Confirm Password | Must match password |

---

## 🔗 API Endpoints

### ➤ Register User
POST /api/register

### ➤ Login User
POST /api/login

---

## 🗄️ Database Schema

```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  date_of_birth DATE NOT NULL,
  country VARCHAR(50) NOT NULL,
  state VARCHAR(50) NOT NULL,
  city VARCHAR(50) NOT NULL,
  address VARCHAR(255) NOT NULL,
  phone_number VARCHAR(20) NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

⚙️ Setup & Installation
1️⃣ Backend Setup
cd backend
npm install


Create a .env file in the backend folder:

PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=user_auth_db
JWT_SECRET=your_jwt_secret


Start the backend server:

npm start


Backend runs on:

http://localhost:5000

2️⃣ Frontend Setup
cd frontend
npm install
ng serve


Open in browser:

http://localhost:4200

🧪 API Testing

Use Postman to test APIs

Import the provided Postman collection

Test:

/api/register

/api/login

Verify JWT token generation on successful login

🔐 Security Implementation

Passwords are hashed using bcrypt

JWT tokens used for authentication

Email uniqueness enforced at database and API level

Sensitive data secured using environment variables
