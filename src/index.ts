import express from "express";
import cors from "cors";
import { connectDB } from "./config/db";
import cookieParser from "cookie-parser";
import rssRoutes from "./routes/rss.routes";
import { swaggerDocs } from "./swagger/swagger";

const app = express();
const PORT = Number(process.env.PORT) || 3004;

// Connect DB
connectDB();

// CORS - FIXED FOR SWAGGER
app.use(
  cors({
    origin: "*",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
);

app.use(express.json());
app.use(cookieParser());

// Swagger
swaggerDocs(app, PORT);

// Root
app.get("/", (_req, res) => {
  res.send("Hello! API is running...");
});

// API Routes
app.use("/api", rssRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
