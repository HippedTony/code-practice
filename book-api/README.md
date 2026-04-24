# Book API

A Java Spring Boot backend application for managing a collection of books. This API allows users to add, update, and delete books, each with details such as ISBN, author, description, and image cover. It uses Docker for the database setup.

## Features

- Add new books
- Update existing books
- Delete books
- Retrieve book details
- RESTful API endpoints

## Requirements

- Java 17 or higher
- Maven
- Docker (for database)
- A `.env` file with your environment variables

## Setup

1. Clone the repository:
  ```
  git clone https://github.com/yourusername/book-api.git
  cd book-api
  ```

2. Create a `.env` file in the root directory with your environment variables (e.g., database credentials, API keys).

3. Start the database using Docker:
  ```
  docker-compose up -d
  ```

4. Build and run the application:
  ```
  mvn clean install
  mvn spring-boot:run
  ```

The API will be available at `http://localhost:8080`.


## Frontend Integration

This backend is used by the [Book Frontend App](https://github.com/HippedTony/code-practice/tree/main/book-api-ui). Refer to its repository for the frontend implementation.

## Contributing

Feel free to submit issues and pull requests.
