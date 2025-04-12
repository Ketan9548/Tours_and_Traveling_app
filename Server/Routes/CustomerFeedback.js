import express from 'express';
import Customerfeedback from '../Modeals/CustomerFeedback.js';

const CustomerFeedbackapp = express();

CustomerFeedbackapp.post('/customerfeedback', async (req, res) => {
    try {
        const { Name, Email, Phone, rating, Review } = req.body;

        if (!Name || !Email || !Phone || !rating || !Review) {
            return res.status(400).json({ message: "All fields are required" });
        }
        if (parseInt(rating) < 1 || parseInt(rating) > 4) {
            return res.status(400).json({ message: "Rating must be between 1 and 4" });
        }

        const newfeedback = await Customerfeedback.create({ Name, Email, Phone, rating, Review });

        res.status(200).json({ message: 'Customer Feedback Added Successfully', data: newfeedback });
    } catch (error) {
        console.log("Error in adding Customer Review", error);
        res.status(500).json({ message: error.message });
    }
});

export default CustomerFeedbackapp;
