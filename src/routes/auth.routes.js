import express from "express";
import { login,refreshToken, logout,register  } from "../controllers/auth.controller.js";

const router = express.Router();
router.post("/register", register);
router.options("/login", (req, res) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://portfolio-cms-client-jr39tgxb2-sonali-nikkis-projects.vercel.app"
  );
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "POST, OPTIONS"
  );
  return res.sendStatus(200);
});

router.post("/login", login);
router.get("/refresh", refreshToken);
router.post("/logout", logout);

export default router;