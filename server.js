const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import the cors middleware
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

app.post("/api/send-email", async (req, res) => {
  const { firstName, type, comment } = req.body; // Remove 'email' from here

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.DESTINATION_EMAIL,
    subject: `Portfolio Inquiry from ${firstName}`,
    text: `Type: ${type}\n\n${comment}`,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ type: "success" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ type: "error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
