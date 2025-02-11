# Image-Tagging API

## Overview

This is the backend API server for the Image-Tagging Application, responsible for handling image tagging operations using a dynamic database. It is built with Node.js, Express, PostgreSQL, Sequelize, and pg.

### Features
- RESTful API for managing image tags
- Uses Supabase as the database
- Secure authentication and authorization
- CRUD operations for images and tags
- Integration with the frontend application Image-Tagging-App

### Tech Stack
- **Node.js**
- **Express.js**
- **PostgreSQL** (via Supabase)
- **Sequelize ORM**
- **pg** (PostgreSQL client for Node.js)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/image-tagging-api.git
    cd image-tagging-api
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables:
   - Create a `.env` file in the root directory and add the following:

    ```env
    DATABASE_URL=your_supabase_database_url
    PORT=5000
    JWT_SECRET=your_secret_key
    ```

4. Run database migrations:

    ```bash
    npx sequelize-cli db:migrate
    ```

5. Start the server:

    ```bash
    npm start
    ```

The server will run at `http://localhost:5000`.

## API Endpoints

| Method | Endpoint            | Description                       |
|--------|---------------------|-----------------------------------|
| POST   | /auth/register       | Register a new user              |
| POST   | /auth/login          | User authentication (JWT-based)  |
| GET    | /images              | Fetch all images                 |
| POST   | /images              | Upload a new image               |
| GET    | /images/:id          | Fetch a specific image           |
| DELETE | /images/:id          | Delete an image                  |
| GET    | /tags                | Fetch all tags                   |
| POST   | /tags                | Add a new tag                    |
| DELETE | /tags/:id            | Delete a tag                     |

## Deployment

This API can be deployed using Fly.io or any cloud platform supporting Node.js and PostgreSQL.

## License

This project is licensed under the MIT License. @DEWALDFOURIE

## Contributing

Contributions are welcome! Feel free to submit pull requests or open issues.

## Contact

For any questions or issues, reach out via GitHub Issues.
