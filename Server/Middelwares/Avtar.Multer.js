import multer from "multer";
import express from "express";

const avtar = multer.diskStorage({
    destination: "./uploads/",
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    },
})

const fileFilter = (req, res, cd) => {
    const allowfiles = /jpeg|jpg|png/;
    const extname = allowfiles.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowfiles.test(file.mimetype);

    if (extname && mimetype) {
        cd(null, true);
    } else {
        cd(null, false);
        return res.status(400).send('Only images are allowed.');
    }
}

const upload = multer({ storage: avtar, limits: { fieldSize: 1000000 }, fileFilter: fileFilter });


export default upload;

