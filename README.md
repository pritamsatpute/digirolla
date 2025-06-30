# Digirolla – Internship Project

A full-stack website developed as part of an internship project at **Next24tech Technology & Services**. The website includes **HTML, CSS, JavaScript** for frontend and a **Node.js + Express.js** for backend.

---

## Table of Contents

- Features
- Project Structure
- Tech Stack
- Authentication
- Installation
- Running the Project
- Folder Structure
- Screenshots
- License

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
git clone https://github.com/pritamsatpute/digirolla.git
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

## Screenshots

Below are screenshots of the **Digirolla** in action:

### HOME SECTION
![homepage-section](https://github.com/user-attachments/assets/53b7ecb9-c891-49f5-aeac-b615338e1fac)

### ABOUT SECTION
![about-section](https://github.com/user-attachments/assets/408f3fbc-b89e-4280-a049-10b8bbbb567b)

### SERVICES SECTION
![services-section](https://github.com/user-attachments/assets/250dfeac-0711-4b43-b9c3-886a1c7f5dbb)

### BLOGS & NEWS SECTION
![blogs-news-section](https://github.com/user-attachments/assets/65eb3d02-1e3c-444a-a586-379fd6b91fb0)

### PROJECT SECTION
![projects-section](https://github.com/user-attachments/assets/233b0a95-6616-40f6-9d1c-c39f2711031b)

### CONTACT SECTION
![quote-form](https://github.com/user-attachments/assets/fd994dd3-f19e-4fc1-8cf8-159dbb2889f7)

### FOOTER SECTION
![footer-section](https://github.com/user-attachments/assets/79c3a85d-6901-4fa0-9a7e-f5925ec8268e)

## License

This project is part of an internship and is intended for educational purposes only.
