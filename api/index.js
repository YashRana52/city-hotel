import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO)
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('MongoDB connection error:', error));

const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
