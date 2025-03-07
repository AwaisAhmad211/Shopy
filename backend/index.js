import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv';
import router from './src/routes/authRoute.js';


const app = express();
dotenv.config();


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.send("Woring")
})
app.use("/api/auth",router)

const port = process.env.PORT
app.listen(port,()=>{
    console.log(`Server is listing on port ${port}`)
});