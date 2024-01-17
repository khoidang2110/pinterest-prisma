import express from "express";
 import {   login, signUp, updateUser } from "../controllers/user/userControllers.js"
import { getUser } from "../controllers/imgManage/imgManagerControllers.js";
import { verifyToken } from "../config/jwt.js";



const userRoutes = express.Router();
userRoutes.post('/login',login)
userRoutes.post("/sign-up",signUp)
userRoutes.get('/get-user/:id',verifyToken ,getUser)
userRoutes.put("/update-user",updateUser)
export default userRoutes;