import express from "express";
import Usermodel from "../Moduals/UserModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

const Userapp = express();

// registration function
Userapp.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = new Usermodel({
      name: name,
      email: email,
      password: password,
    });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).json({ message: "User registration failed" });
  }
}); 

// login function
Userapp.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Usermodel.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.security_key, {
      expiresIn: "1h",
    });
    res.json({ message: "Logged in successfully", token });
  } catch (err) {
    res.status(401).json({ message: "Invalid email or password" });
  }
});

Userapp.get("/users", async (req, res) => {
  try {
    const users = await Usermodel.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching all users", error });
  }
});

export default Userapp;
