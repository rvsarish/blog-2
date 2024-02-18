import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
const app = express();
dotenv.config();
app.use(express.json());
mongoose.connect(process.env.MONGO).then(() => console.log('Connected to MongoDB')).catch(err => console.log(err));

app.listen(5000, () => console.log('Server Running'));
