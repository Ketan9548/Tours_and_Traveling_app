import express from "express";
import ServicesModels from "../Moduals/ServicesModel.js";
import upload from "../Middelwares/Avtar.Multer.js";
import authentiMiddelware from "../Middelwares/UserRegister.Middelware.js";

const Serviceapp = express();

Serviceapp.post("/add", authentiMiddelware,  async (req, res) => {
  try {
    const data = req.body;
    const newService = new ServicesModels(data);
    await newService.save();
    res.status(200).json({ message: "Services Added Succesfully" });
  } catch (error) {
    console.log("Service added error in database", error);
    res.status(400).json({ message: "Error in the add service in database" });
  }
});

Serviceapp.get("/alldata", authentiMiddelware, async (req, res) => {
  try {
    const alldata = await ServicesModels.findAll();
    res.status(200).json(alldata);
  } catch (error) {
    res.status(500).json({ message: "Error fetching all data", error });
  }
});

Serviceapp.post('/avtar_uploads', authentiMiddelware, upload.single('avtar'), (req, res) => {
  try {
    res.status(200).json({ message: 'File uploaded successfully', file: req.avtar });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})

Serviceapp.delete("/delete/:id", authentiMiddelware, async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRows = await ServicesModels.destroy({ where: { id } });

    if (deletedRows === 0) {
      return res.status(404).json({ message: "Service not found" });
    }

    res.status(200).json({ message: "Service deleted successfully" });
  } catch (error) {
    console.log("Error deleting service", error);
    res.status(500).json({ message: "Error deleting service", error });
  }
});


export default Serviceapp;
