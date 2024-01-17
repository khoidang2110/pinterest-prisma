import express from "express";
import {  getSavedImaged } from "../controllers/detailPage/detailPageControllers.js";
import {  getSavedImagedByUserId } from "../controllers/imgManage/imgManagerControllers.js";


const savedImagedRoutes = express.Router();




savedImagedRoutes.get("/get-saved-imaged/:id",getSavedImaged)
savedImagedRoutes.get("/get-img-by-user/:id",getSavedImagedByUserId);
export default savedImagedRoutes;