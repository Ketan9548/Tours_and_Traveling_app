import express from 'express';
import Blogsmodels from '../Modeals/Blogs.models.js';
import upload from '../Middelwares/multer.Middelware.js';
import multer from 'multer';


const Blogsapp = express();

Blogsapp.post('/blogsUpload', upload.single('image'), async (req, res) => {
    try {
        const { name } = req.body;
        if (!name || !req.file) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const imageUrl = req.file.path; // cloudinary URL
        const newBlogs = await Blogsmodels.create({ name, image: imageUrl });

        res.status(200).json({ message: 'Blogs Added Successfully...', data: newBlogs });
    } catch (error) {
        console.log("Error in adding Blogs in database", error);
        res.status(500).json({ message: error.message });
    }
});


// get all the blogs
Blogsapp.get("/allblogsdata", async (req, res) => {
    try {
        const Blogs = await Blogsmodels.findAll();
        if (!Blogs) {
            return res.status(404).json({ message: "No Blogs Found" });
        }
        res.status(200).json({ success: true, data: Blogs });
    } catch (error) {
        res.status(500).json({ message: "Error fetching all data", error });
    }
});


export default Blogsapp;
