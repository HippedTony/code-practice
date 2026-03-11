# NestJS + React Fullstack App

## 📖 Description

This project is a practical introduction to building a **fullstack web application** using **NestJS** for the backend and **React** for the frontend.

The backend is built with **NestJS** and connects to a **MongoDB** NoSQL database using **Mongoose**. The frontend is built with **React** and **Vite**, consuming the backend API to manage application data.

The goal of this exercise is to learn how to structure and connect a modern **TypeScript-based fullstack application**, implementing a backend API and a client application that communicates with it.

This project is divided into two separate applications:

* **Backend** → NestJS API with MongoDB
* **Frontend** → React application that consumes the API

---

## 🛠️ Tech Stack

### Backend

* TypeScript
* NestJS
* Node.js
* MongoDB
* Mongoose

### Frontend

* React
* TypeScript
* Vite
* TailwindCSS

---

## ⚙️ Getting Started

This project contains **two separate applications**: one for the backend and one for the frontend.

You will need **two terminal windows** to run both services.

### Prerequisites

* Node.js
* npm
* MongoDB running locally

---

## 🚀 Running the Backend

1. Navigate to the backend folder

```bash
cd tasksapi
```

2. Install dependencies

```bash
npm install
```

3. Start the backend server

```bash
npm run start:dev
```

The API will run at:

```
http://localhost:3000/api
```

---

## 💻 Running the Frontend

1. Open another terminal and navigate to the frontend folder

```bash
cd tasksfront
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

The frontend application will run at:

```
http://localhost:5173
```
