# Employee Management System (Full-Stack)

A complete full-stack Employee Management System built with **Next.js**, **Node.js/Express.js**, and **MongoDB**. This project provides a responsive, user-friendly interface to perform CRUD (Create, Read, Update, Delete) operations on employee records along with dynamic search, department/position filtering, and comprehensive frontend/backend validation.

---

## 🚀 Key Features

### Frontend (Next.js)
* **Responsive Dashboard:** A clean, responsive user interface built using Next.js App Router and Tailwind CSS.
* **Employee List & Table View:** Beautiful data table detailing employee records (name, email, phone, department, position, salary, and joining date).
* **Add & Edit Forms:** Multi-field forms utilizing full validation rules (e.g. email format validation, and 10-digit numeric-only phone validation).
* **Dynamic Search & Filtering:** Live, debounced search (by name, email, or phone) and dynamic dropdown filters loaded dynamically from active database values.
* **Loading & Error Components:** Graceful skeletons and error recovery fallback screens.

### Backend (Node.js & Express.js)
* **RESTful API Structure:** Clean controller-router pattern for managing endpoint routing.
* **Robust Query Logic:** Partial case-insensitive regex pattern matching for search/filter queries.
* **Mongoose Validations:** Server-side schema rules for unique emails, field requirements, and numeric parameters.
* **Global Error Catching:** Centralized mapping of Mongo and database validation cast/duplicate errors to readable JSON responses.

### Database (MongoDB)
* Fully integrated with MongoDB Atlas (or local MongoDB) via Mongoose schemas.
* Automatically stores document timestamps (`createdAt` and `updatedAt`).

---

## 🛠️ Tech Stack

* **Frontend:** Next.js, React, Axios, Tailwind CSS, React Hot Toast
* **Backend:** Node.js, Express.js, Mongoose, Cors, Dotenv
* **Database:** MongoDB
* **Version Control:** Git

---

## 📂 Project Structure

```text
├── backend/
│   ├── config/            # MongoDB connection settings
│   ├── controllers/       # Route action handlers (employeeController.js)
│   ├── models/            # Mongoose Schemas (Employee.js)
│   ├── routes/            # Express API endpoint declarations (employeeRoutes.js)
│   ├── .env.example       # Sample backend environment configuration
│   └── server.js          # API starting entrypoint
├── frontend/
│   ├── app/               # Next.js App Router Pages
│   ├── components/        # Flat layout React Components (EmployeeTable, SearchFilter, etc.)
│   ├── lib/               # Custom axios helper configs
│   ├── jsconfig.json      # Path mapping aliases configuration (@/*)
│   └── .env.example       # Sample frontend environment configuration
```

---

## 💻 Local Setup & Installation

Follow these steps to run both the frontend and backend servers on your local machine.

### Prerequisites
* [Node.js](https://nodejs.org/) installed (v18+ recommended)
* [MongoDB](https://www.mongodb.com/) running locally or a MongoDB Atlas connection string.

---

### Step 1: Clone the Repository
```bash
git clone https://github.com/anshifariya042/employeee-management.git
cd "employeee-management"
```

---

### Step 2: Configure Backend Server

1. Open a terminal and navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install the server dependencies:
   ```bash
   npm install
   ```
3. Create your environment variables file:
   ```bash
   cp .env.example .env
   ```
4. Open the newly created `.env` file and replace the configurations with your local details:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/employee_management
   ```
5. Start the backend dev server:
   ```bash
   npm run dev
   ```
   *The API will start running on [http://localhost:5000](http://localhost:5000).*

---

### Step 3: Configure Frontend Client

1. Open a new terminal and navigate to the frontend folder:
   ```bash
   cd ../frontend
   ```
2. Install the client dependencies:
   ```bash
   npm install
   ```
3. Create your environment variables file:
   ```bash
   cp .env.example .env.local
   ```
4. Open `.env.local` and configure your API entrypoint URL if different:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   ```
5. Start the Next.js development server:
   ```bash
   npm run dev
   ```
   *Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.*

---

## 📡 REST API Documentation

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/api/employees` | Get all employees (supports `search`, `department`, and `position` queries) |
| **GET** | `/api/employees/:id` | Retrieve details for a single employee |
| **POST** | `/api/employees` | Create and save a new employee record |
| **PUT** | `/api/employees/:id` | Update an existing employee record |
| **DELETE**| `/api/employees/:id` | Delete an employee from the database |
