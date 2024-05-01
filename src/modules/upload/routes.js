import { Router } from "express";
import uploadController from "./controllers/upload.js";
import multer from 'multer';

const router = Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `src/modules/upload/files`)
    },
    filename: function (req, file, cb) {
        const uniqueId = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, `${uniqueId}-${file.originalname}`)
    }
})

const upload = multer({ storage: storage })


router.post("/", upload.single('file'), uploadController)

export default router;
