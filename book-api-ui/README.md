# Book API UI

A React application built with Vite and TypeScript that interacts with a Java Spring Boot backend API to manage books. This frontend allows fetching books from the API, adding new books, and updating existing ones.

## Features

- Fetch and display books from the backend API.
- Add new books.
- Update existing books.
- Built with React, Vite, and TypeScript for fast development and type safety.

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- Access to the Java Spring Boot backend API (separate repository)

## Installation

1. Clone the repository:
  ```
  git clone https://github.com/HippedTony/code-practice.git
  cd code-practice/book-api-ui
  ```

2. Install dependencies:
  ```
  npm install
  ```

3. Create a `.env` file in the root directory with the following variable:
  ```
  VITE_DATABASE_URL=your_database_url_here
  ```
  Replace `your_database_url_here` with the actual database URL for your environment.

4. Start the development server:
  ```
  npm run dev
  ```

## Usage

- The app connects to the Spring Boot backend API to retrieve, add, and update books.
- Ensure the backend is running and accessible.

## Backend Integration

This frontend uses this project [Book Backend_API](https://github.com/HippedTony/code-practice/tree/main/book-api). Refer to its repository for the backend implementation.

## Known Bugs

- Cannot update the image of a book.
- Cannot delete a book.
- Both issues are related to how images are stored and handled in the system.

## Contributing

Contributions are welcome. Please submit issues or pull requests to the main repository.
