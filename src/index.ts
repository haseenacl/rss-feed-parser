import express from "express";
import cors from "cors";
import { connectDB } from "./config/db";
import cookieParser from "cookie-parser";
import rssRoutes from "./routes/rss.routes";
import { swaggerDocs } from "./swagger/swagger";

const app = express();
const PORT = process.env.PORT || 3004;

// Connect Database
connectDB();

// Middlewares
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// Swagger
swaggerDocs(app);

// Root endpoint
app.get("/", (_req, res) => {
  res.send("Hello! API is running...");
});

// API Routes
app.use("/api", rssRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
