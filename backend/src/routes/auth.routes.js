import express from "express";
import {
  check,
  login,
  logout,
  register,
} from "../controllers/auth.controller.js";

const authRoutes = express.Router();

//Routes
authRoutes.post("/register", register);

authRoutes.post("/login", login);

authRoutes.post("/logout", logout);

authRoutes.post("/check", check);

export default authRoutes;
