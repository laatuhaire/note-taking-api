GROUP 4 NOTE TAKING API


A simple  API that allows users to do the followingcreating, reading, updating, and deleting notes using Node.js and Express. Data is stored in memory, making it ideal for learning and small projects
Features
1)Create a new note
2)Retrieve all notes
3)Retrieve a single note by ID
4)Update a note by ID
5)Delete a note by ID


# 📒 Notes API

A secure RESTful Notes API built with Node.js and Express.
Users can create, manage, and organize personal notes with authentication.

---

##  Features

- User registration & login
- JWT authentication
- Create, read, update, delete notes
- Each user can only access their own notes
- Input validation
- Centralized error handling

---

##  Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcrypt
- dotenv

---

## Security Implementation

- Passwords hashed using bcrypt
- JWT-based authentication
- Protected routes (authorization middleware)
- Environment variables for secrets
- Input validation
- Proper HTTP status codes
- CORS protection

---

##  Installation

Clone the repository:

```bash
git clone https://github.com/laatuhaire@gmail.com/notes-api.git
cd notes-api
npm install
