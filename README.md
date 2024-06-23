# Code Assistant Backend

This is a backend service for a code assistant application built using Node.js. It provides various functionalities including authentication, session management, and integration with OpenAI for code assistance.

## Dependencies

The project uses the following npm packages:

- **bcrypt**: For hashing passwords.
- **dotenv**: To load environment variables from a `.env` file.
- **express**: A web framework for Node.js.
- **express-session**: For session management.
- **jsonwebtoken**: For generating and verifying JSON Web Tokens.
- **mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **morgan**: HTTP request logger middleware.
- **openai**: To interact with OpenAI's API.
- **passport**: For authentication.
- **passport-local**: Local username and password authentication strategy for Passport.
- **zod**: For schema validation.

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/code-assistant-backend.git
   cd code-assistant-backend
2. **Install the dependencies:**
   ```sh
   npm install
3. **Set up environment variables:**

Create a .env file in the root directory and add the following variables:
```sh
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_api_key
SESSION_SECRET=your_session_secret

4. **Start the development server:

To start the server, run:
sh
npm run dev


