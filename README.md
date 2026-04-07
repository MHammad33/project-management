# Project Management API

A Node.js backend API for project management applications, built with Express.js and MongoDB.

## Features

- User authentication and authorization (JWT)
- Password hashing with bcrypt
- Email verification and password reset
- Health check endpoint
- CORS enabled
- Input validation

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT, bcrypt
- **Email**: Nodemailer, Mailgen
- **Validation**: Express-validator
- **Containerization**: Docker, Docker Compose

## Prerequisites

- Node.js (v16 or higher)
- MongoDB
- Docker (optional, for containerized setup)

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd project-management
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:

   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/project-management
   JWT_SECRET=<your-secure-jwt-secret>
   JWT_ACCESS_EXPIRY=1d
   JWT_REFRESH_EXPIRY=10d
   EMAIL_USER=<your-email@gmail.com>
   EMAIL_PASS=<your-email-app-password>
   CORS_ORIGIN=http://localhost:5173
   ```

   > **Security Note**: Never commit your `.env` file to version control. Use strong, unique secrets for JWT tokens and keep email credentials secure.

## Usage

### Development

```bash
npm run dev
```

### Production

```bash
npm start
```

### Docker

```bash
docker-compose up --build
```

The API will be available at `http://localhost:3000`

## API Endpoints

### Authentication

- `POST /api/v1/auth/register` - Register a new user
- `POST /api/v1/auth/login` - Login user
- `POST /api/v1/auth/logout` - Logout user
- `GET /api/v1/auth/current-user` - Get current user info
- `POST /api/v1/auth/refresh-token` - Refresh access token
- `POST /api/v1/auth/change-password` - Change current password
- `POST /api/v1/auth/forgot-password` - Request password reset
- `POST /api/v1/auth/reset-password` - Reset password
- `POST /api/v1/auth/verify-email` - Verify email
- `POST /api/v1/auth/resend-verification` - Resend email verification

### Health Check

- `GET /api/v1/healthcheck` - Health check endpoint

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

ISC
