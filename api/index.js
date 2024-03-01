import express  from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
const app = express();
dotenv.config()

mongoose.connect(process.env.MONGO_DB_URL).then(()=>{
    console.log('Database is Connected')
}).catch((error)=>{
    console.log(error)
})

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});