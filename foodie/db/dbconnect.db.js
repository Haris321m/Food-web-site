import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const url=process.env.URL;


try {
   mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true });
} catch (error) {
    console.log(error.message);
    
}

