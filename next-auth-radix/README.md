# Next.js 14 Fullstack Auth App

## 📖 Description

This project is a fullstack web application built using **Next.js** and **TypeScript**.

It demonstrates how to implement authentication and authorization using **NextAuth**, along with route protection, form validation, and full **CRUD (Create, Read, Update, Delete)** functionality.

The backend uses **Prisma ORM** with a **SQLite** database for data persistence. The frontend is built using **Radix UI**, providing accessible and customizable pre-built components to accelerate development.

---

## 🛠️ Tech Stack

* TypeScript
* Next.js 14 (App Router)
* NextAuth (Authentication)
* Prisma (ORM)
* SQLite (Database)
* Radix UI (UI Components)
* React

---

## 🔐 Features

* User authentication with NextAuth
* Protected routes and access control
* CRUD operations
* Form validation
* Database management with Prisma
* Reusable UI components with Radix UI

---

## ⚙️ Getting Started

### Prerequisites

* Node.js
* npm

---

## 🚀 Installation

1. Clone the repository

```bash
git clone <your-repo-url>
cd project-name
```

2. Install dependencies

```bash
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file in the root directory and add:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=secret
DATABASE_URL="file:./dev.db"
```

---

## 🗄️ Database Setup (Prisma)

Run the following commands to set up the database:

```bash
npx prisma migrate dev
```

(Optional) Open Prisma Studio:

```bash
npx prisma studio
```

---

## ▶️ Running the Project

Start the development server:

```bash
npm run dev
```

The application will be available at:

```
http://localhost:3000
```
