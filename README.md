
# Debounce Project

A full-stack project that demonstrates the use of **debouncing** for optimizing search functionality in a web application.

## 📝 Table of Contents
- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [License](#license)

---

### 🧑‍💻 Overview

This project features a simple **React** frontend integrated with a **Node.js** backend. The primary feature being demonstrated is **debouncing**—a technique used to optimize performance by limiting the number of requests sent to the backend while the user is typing in a search field.

---

### 🛠️ Tech Stack

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: (Optional, if used) MongoDB or PostgreSQL
- **Others**: Axios (for HTTP requests), Lodash (for debouncing)

---

### 📥 Installation

#### Frontend (React)

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/debounce.git
   cd debounce/frontend
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Run the React development server:
   ```bash
   npm run dev
   ```

The React app will be running on `http://localhost:3000`.

---

#### Backend (Node.js)

1. Navigate to the backend folder:
   ```bash
   cd debounce/backend
   ```

2. Install backend dependencies:
   ```bash
   npm install
   ```

3. Start the Node.js server:
   ```bash
   npm run start
   ```

The backend server will be running on `http://localhost:5000`.

---

### 🚀 Usage

Once both the **frontend** and **backend** are running:

- Open the **React** application in your browser (usually `http://localhost:3000`).
- The app will feature a search bar, and as you type, the debounce functionality will limit the number of requests sent to the backend, optimizing performance.

---

### 🗂️ Folder Structure

```
debounce/
├── frontend/          # React frontend application
│   ├── public/        # Public assets
│   ├── src/           # React components, App.js, etc.
│   ├── index.css      # Global styles (Tailwind CSS)
│   └── vite.config.js # Vite configuration file
└── backend/           # Node.js backend application
    ├── controllers/   # Express route handlers
    ├── models/        # Database models (if any)
    ├── routes/        # API routes
    ├── server.js      # Entry point for the Node server
    └── package.json   # Backend dependencies and scripts
```

---

### 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
