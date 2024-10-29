const express = require('express');
const cors = require('cors'); // Import the cors package
const bodyParser = require('body-parser');

const app = express();
const port = 3002;

const hotelRouter = require('./routes/hotelRouter');
const userRouter = require('./routes/userRouter');
const connectDB = require('./db/config');

// Middleware
app.use(bodyParser.json());
app.use(express.json()); // Middleware to parse JSON bodies

// CORS configuration
app.use(
  cors({
    origin: ["http://localhost:3000"], // Add your local IP address here
    credentials: true, // Allow credentials (cookies)
  })
);

// Connect to database
connectDB();

// Use routers
app.use('/', hotelRouter); // Use the hotel router with the /hotels path
app.use('/', userRouter); // Use the user router with the /users path

// Default route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
