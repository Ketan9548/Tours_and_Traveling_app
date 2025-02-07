import express from 'express';
import CustomerReviewModel from '../Moduals/CustomerReviewModel.js';

const CustomerReviewapp = express();

CustomerReviewapp.post('/customerreview', async (req, res) => {
    const data = req.body;
    try {
        const newdata = new CustomerReviewModel(data);
        await newdata.save();
        res.status(200).json({ message: 'Customer Review Added Successfully' });
    } catch (error) {
        console.log("Error in adding Customer Review", error);
        res.status(400).json({ message: "Error in the add Customer Review Added in database" });
    }
})

export default CustomerReviewapp;