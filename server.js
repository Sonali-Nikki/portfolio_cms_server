import express from 'express';
import { connectDB } from './src/config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import routes from './src/routes/index.js';
import skillRoutes from "./src/routes/skillRoutes.js";
import projectRoutes from "./src/routes/projectRoutes.js";
import blogRoutes from "./src/routes/blogRoutes.js";
import experienceRoutes from "./src/routes/experienceRoutes.js";
import testimonialRoutes from "./src/routes/testimonialRoutes.js";
import serviceRoutes from "./src/routes/serviceRoutes.js";
import aboutRoutes from "./src/routes/aboutRoutes.js";
import authroutes from "./src/routes/auth.routes.js";
import { seedAdmin } from './seedAdmin.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;


// Middleware
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));


// Routes
app.use('/api', routes);
app.use("/api/auth", authroutes);
app.use("/api/about", aboutRoutes);   
app.use("/api/skills", skillRoutes);         
app.use("/api/projects", projectRoutes);       
app.use("/api/blogs", blogRoutes);            
app.use("/api/experience", experienceRoutes);  
app.use("/api/testimonials", testimonialRoutes); 
app.use("/api/services", serviceRoutes);       
app.use("/uploads", express.static("uploads"));


// Database connection
connectDB();


await seedAdmin();

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});