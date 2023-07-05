// environment varible configare
import dotenv from "dotenv"
dotenv.config();

import express from "express"
import cors from "cors"
import router from "./routes/authRout";


const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 8000;

// database configare
import "./config/db"

// routes 
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server Running on Port:${PORT}`);
})
