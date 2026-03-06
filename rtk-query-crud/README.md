# Redux Toolkit Query CRUD

## 📖 Description

This project is a practical introduction to Redux using **Redux Toolkit Query** with **React**.  
The application implements a simple **CRUD (Create, Read, Update, Delete)** system to manage items using global state.

The goal of this exercise is to learn how **Redux Toolkit Query** works in a real application, including how to fetch, create, update, and delete data from an API while managing caching and server state efficiently.

To simulate a backend API, the project uses **json-server**. The interface is styled using **TailwindCSS**.

---

## 📦 Mock API

This project uses **json-server** to simulate a REST API.  
The data is stored in the `db/tasks.json` file.

---

## 🛠️ Tech Stack

- JavaScript
- React
- Redux Toolkit Query
- TailwindCSS
- Vite
- JSON Server

---

## ⚙️ Getting Started

This project requires **two terminal windows**:  
one for the **frontend client** and one for the **mock backend server** using **json-server**.

### Prerequisites

- Node.js
- npm

### Steps

1. Install dependencies

```bash
npm install

2. Start the JSON Server (mock API)
   ```bash
   npm run back

3. In another terminal, start the frontend
   ```bash
   npm run dev