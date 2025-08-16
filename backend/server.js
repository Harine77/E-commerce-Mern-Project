// Import dependencies
import express from 'express';    // Main Express framework
import cors from 'cors';          // For enabling Cross-Origin Resource Sharing
import 'dotenv/config';           // Loads environment variables from a .env file
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';

// App configuration
const app = express();
const port = process.env.PORT || 4000;   // Use PORT from .env or fallback to 4000
connectDB()
connectCloudinary()

// Middlewares
app.use(express.json()); // Parse incoming JSON requests
app.use(cors());         // Allow cross-origin requests

// API endpoints

app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.get('/', (req, res) => {
  // Send a simple response for the root route
  res.send("API WORKS!");
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
