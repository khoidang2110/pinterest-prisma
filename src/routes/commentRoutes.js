import express from "express";
import { createComment, getComment } from "../controllers/detailPage/detailPageControllers.js";




const commentRoutes = express.Router();

commentRoutes.post("/create-comment",createComment)
commentRoutes.get('/get-comment/:img_id',getComment)
export default commentRoutes;