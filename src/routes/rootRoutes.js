import express from "express";

import userRoutes from "./userRoutes.js";
import imageRoutes from "./imageRoutes.js";
import commentRoutes from "./commentRoutes.js";

import savedImagedRoutes from "./savedImagedRoutes.js";

const rootRoutes = express.Router();
rootRoutes.use('/saved-imaged',savedImagedRoutes)
rootRoutes.use("/comment",commentRoutes)
rootRoutes.use("/user", userRoutes);
rootRoutes.use("/image",imageRoutes)
export default rootRoutes;
