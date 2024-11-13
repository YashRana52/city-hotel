// api/index.js
import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import authRouter from './routes/authRoute.js';
import userRouter from './routes/userRoute.js';


mongoose.connect(process.env.MONGO)
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('MongoDB connection error:', error));

const app = express();
app.use(express.json())

// Middleware for routes
app.use('/api/user', userRouter);
app.use('/api/auth',authRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
