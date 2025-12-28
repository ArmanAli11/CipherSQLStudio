# CipherSQLStudio

A full-stack SQL practice platform built as part of the CipherSchools Full Stack Assignment.

## Features

- View SQL assignment questions with pre-loaded sample data
- Write and execute SQL queries in an interactive editor (Monaco Editor)
- Secure backend execution with SELECT-only query validation
- View query results in a tabular format
- Hint system powered by Google Gemini (conceptual hints only, no solutions)
- Clean, responsive UI using SCSS (no UI libraries)

## Tech Stack

### Frontend
- React
- Vite
- SCSS
- Monaco Editor

### Backend
- Node.js
- Express
- PostgreSQL

### AI
- Google Gemini API (via backend HTTP integration)

## Security

- SQL queries are validated on the backend
- Only read-only SELECT queries are allowed
- API keys are stored securely in environment variables

## Setup Instructions

### Backend
```bash
cd backend
npm install
npx nodemon server.js
