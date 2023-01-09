import express  from "express";
import mongoose  from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
import emailRoutes from './routes/emails.js'
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

app.use(emailRoutes);
app.get('/',(req,res)=>{
    res.send('Hello to portfolio API')
})
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.CONNECTION_URL).then(()=> app.listen(PORT, ()=> console.log(`Server running on Port: http://localhost:${PORT}`))).catch((error)=> console.log(error.message));
