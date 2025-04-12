import express from "express";
import sequelizeDB from "./DatabaseConnection/DbConnection.js";
import bodyParser from "body-parser";
import Serviceapp from "./Routes/ServicesRoutes.js";
import Contactinfoapp from "./Routes/ContactinfoRoutes.js";
import CustomerFeedbackapp from "./Routes/CustomerFeedback.js";
import Userapp from "./Routes/UserRoutes.js";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());



// Database connection
const connectToDatabase = async () => {
  try {
    await sequelizeDB.authenticate();
    await sequelizeDB.sync({ alter: true });
    console.log("Connection has been Created successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
connectToDatabase();

// Middleware
app.use(bodyParser.json());
app.use("/api", Serviceapp); // Correctly register the service routes
app.use("/api", Contactinfoapp);
app.use("/api", Userapp);
app.use("/api", CustomerFeedbackapp);

// Default route
app.get("/", (req, res) => {
  // Swapped `req` and `res` in the function signature
  res.send("hello");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
