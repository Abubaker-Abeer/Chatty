import {Router} from 'express'
import * as Controller from './profile.controller.js';
import fileUpload, { fileValidation } from '../../Utils/multer.js';
import { authMiddleware } from "../../middleware/auth.middleware.js";
const router =Router();
router.put("/update-profile",authMiddleware,fileUpload(fileValidation.image).single("profilePic"),Controller.updateProfile);
router.get("/", authMiddleware, Controller.getProfile); 
export default router;
