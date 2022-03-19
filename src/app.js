import express from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./Routes/schedule.routes";

const app = express()

app.get("/", (req, res) => {
    res.json({ greet: "Welcome to my api" })
})

// Middleware
app.use(express.json())
app.use(morgan("dev"))
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.set("port", process.env.PORT || 3000)
app.use("/api/schedule", router)


export default app;