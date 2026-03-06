# React Query CRUD

## 📖 Description

This project is a practical introduction to **React Query** with **React**.  
The application implements a simple **CRUD (Create, Read, Update, Delete)** system to manage products while handling server state efficiently.

The goal of this exercise is to learn how **React Query** works in a real application, including how to fetch, create, update, and delete data from an API while managing caching, loading states, and server synchronization.

To simulate a backend API, the project uses **json-server**. The interface is styled using **TailwindCSS**.

---

## 📦 Mock API

This project uses **json-server** to simulate a REST API.  
The data is stored in the `db/products.json` file.

---

## 🛠️ Tech Stack

- JavaScript
- React
- React Query
- TailwindCSS
- Vite
- JSON Server
- Axios

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