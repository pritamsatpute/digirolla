# Digirolla – Internship Project

A full-stack website developed as part of an internship project at **Next24tech Technology & Services**. The website includes **HTML, CSS, JavaScript** for frontend and a **Node.js + Express.js** for backend.

---

## Table of Contents

- [Features]
- [Project Structure]
- [Tech Stack]
- [Authentication]
- [Installation]
- [Running the Project]
- [Folder Structure]
- [Screenshots]
- [License]

---

## Features

- JWT-based user authentication system
- Role-based access control
- RESTful API using Express.js
- Fully responsive and mobile-friendly design
- Protected routes with middleware
- Modular folder structure for scalability

---

## Project Structure

```bash
Digirolla/
├── assets/ 
├── backend/
│   ├── package-lock.json
│   ├── package.json
│   ├── quotes.json
│   └── server.js
├── index.html
├── style.css
└── script.js
```

---

## Tech Stack

### Frontend:
- HTML
- CSS
- JavaScript

### Backend:
- Node.js
- Express.js

---

## Authentication

- JWT tokens are generated on form submitted.
- Protected routes using `authMiddleware`
- Roles and user permissions supported (extendable)
- Token validation & expiration handling

---

## Installation

### Clone the repository:
```bash
git clone https://github.com/pritam-satpute/digirolla.git
cd Digirolla
```

---

##  Running the Project

### Backend Setup:
```bash
cd backend
npm install init -y
npm install express cors body-parser fs
```
### To Run Backend:
```bash
cd backend
node server.js
```

## Folder Structure

### Backend
```
backend/
├── backend/
│   ├── package-lock.json
│   ├── package.json
│   ├── quotes.json
│   └── server.js

```

### Frontend
```
Digirolla/
├── assets/
├── backend/
├── index.html
├── style.css
└── script.js

```

---

## Screenshots


---

## License

This project is part of an internship and is intended for educational purposes only.
