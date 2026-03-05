# MERN-GraphQL-Apollo

## 📖 Description

I built a project management CRUD application using the MERN stack (MongoDB, Express, React, and Node.js) with full TypeScript support.

The application uses tRPC to enable end-to-end typesafe communication between the backend and frontend without the need for schema definitions or code generation.

The backend is built with Express.js and Typegoose, providing strongly typed models on top of Mongoose and MongoDB.

The frontend is powered by Vite, React, and TypeScript, consuming the tRPC API with full type safety across the entire stack.

---

## 🛠️ Tech Stack

Backend

- TypeScript
- Node.js
- Express
- tRPC
- Typegoose
- Mongoose
- MongoDB

Frontend

- React
- TypeScript
- tRPC Client

---

## ⚙️ Getting Started

This project requires two terminal windows: one for the server and one for the client.
It also requires a running MongoDB database.

### Prerequisites

- Node.js
- MongoDB (running locally)

### Steps

1. Make sure MongoDB is running locally.
   ```bash
   mongod

2. In the root directory, start the backend server:
   ```bash
   npm run dev

3. Open a second terminal, navigate to the client folder, and start the frontend:
   ```bash
   cd client
   npm run dev
