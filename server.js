import express from "express";
import { connectDB } from "./src/config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import routes from "./src/routes/index.js";
import skillRoutes from "./src/routes/skillRoutes.js";
import projectRoutes from "./src/routes/projectRoutes.js";
import blogRoutes from "./src/routes/blogRoutes.js";
import experienceRoutes from "./src/routes/experienceRoutes.js";
import testimonialRoutes from "./src/routes/testimonialRoutes.js";
import serviceRoutes from "./src/routes/serviceRoutes.js";
import aboutRoutes from "./src/routes/aboutRoutes.js";
import authroutes from "./src/routes/auth.routes.js";
import { seedAdmin } from "./seedAdmin.js";
import contactRoutes from "./src/routes/contactRoutes.js";

dotenv.config();
const app = express();
app.use((req, res, next) => {
  const origin = req.headers.origin;

  if (
    origin &&
    (origin.includes("vercel.app") ||
      origin === "http://localhost:5173")
  ) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: [
      "https://portfolio-cms-client-sigma.vercel.app",
      "https://portfolio-cms-client-6d2b-a6xh72fgy-sonali-nikkis-projects.vercel.app",
      "http://localhost:5173",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
// app.options("*", cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Portfolio CMS Backend is running 🚀");
});

// Routes
app.use("/api", routes);
app.use("/api/auth", authroutes);
app.use("/api/cms/about", aboutRoutes);
app.use("/api/cms/skills", skillRoutes);
app.use("/api/cms/projects", projectRoutes);
app.use("/api/cms/blogs", blogRoutes);
app.use("/api/cms/experience", experienceRoutes);
app.use("/api/cms/testimonials", testimonialRoutes);
app.use("/api/cms/services", serviceRoutes);
app.use("/uploads", express.static("uploads"));
app.use("/api/cms/contact", contactRoutes);

// Database connection
connectDB();

await seedAdmin();

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
