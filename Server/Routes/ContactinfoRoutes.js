import express from "express";
import CustomerFeedbackModel from "../Modeals/CustomerFeedback.js";

const Contactinfoapp = express();

Contactinfoapp.post("/contactinfo", async (req, res) => {
  try {
    const data = req.body;
    const newformdata = new CustomerFeedbackModel(data);
    await newformdata.save();
    res.status(200).json({ message: "Contact Information Added Successfully" });
  } catch (error) {
    console.log("Error in adding contact information", error);
    res.status(400).json({ message: "Error in the add Form Data in database" });
  }
});


export default Contactinfoapp;

