import express from "express";

import { getImg } from "../controllers/homePage/loadImgControllers.js";
import { getImgDetail } from "../controllers/detailPage/detailPageControllers.js";
import { deleteImgById, getImgCreateByUserId } from "../controllers/imgManage/imgManagerControllers.js";
import { verifyToken } from "../config/jwt.js";
import uploadCloud from "../config/cloudinary.config.js";
import { createImg, uploadMultiplePicture} from "../controllers/createImg/createImgController.js";



const imageRoutes = express.Router();


imageRoutes.get('/get-image',verifyToken,getImg);
imageRoutes.get('/get-image-detail/:id',verifyToken,getImgDetail);
imageRoutes.get("/get-img-by-user/:id",verifyToken,getImgCreateByUserId);
imageRoutes.delete('/delete-img/:id',verifyToken,deleteImgById);
imageRoutes.post("/upload-multiple-picture",uploadCloud.array("files"),uploadMultiplePicture);
imageRoutes.post("/create-img/:user_id",uploadCloud.single("file"),createImg);

export default imageRoutes;