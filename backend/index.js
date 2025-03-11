import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv';
import router from './src/routes/authRoute.js';
import connectDB from './src/config/db.js';


const app = express();
dotenv.config();


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Database Connection
connectDB();

app.get("/",(req,res)=>{
    res.send("Woring")
})
app.use("/api/auth",router)

const port = process.env.PORT
app.listen(port,()=>{
    console.log(`Server is listing on port ${port}`)
});