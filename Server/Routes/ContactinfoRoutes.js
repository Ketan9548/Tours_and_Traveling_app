import express from 'express';
import ContactInfoModels from '../Modeals/Contactinfor.js';

const CustomerContactapp = express();

CustomerContactapp.post('/customercontact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newcontactinfo = await ContactInfoModels.create({ name, email, phone, message });

    res.status(200).json({ message: 'Customer Feedback Added Successfully', data: newcontactinfo });
  } catch (error) {
    console.log("Error in adding Customer Review", error);
    res.status(500).json({ message: error.message });
  }
});

export default CustomerContactapp;
