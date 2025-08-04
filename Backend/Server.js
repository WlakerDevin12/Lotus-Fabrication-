const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 8000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Test API
app.get('/', (req, res) => {
  res.send("Server is Started...");
});

// Email Endpoint
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "lotusfabricationservice@gmail.com", // 🔒 your Gmail address
        pass: "jfun yshl cqjw xncg",   // 🔐 App password (NOT your Gmail password)
      },
    });

    // Email options
    const mailOptions = {
      from: email,
      to: "lotusfabricationservice@gmail.com", // where you want to receive the message
      subject: `New Details from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };  

    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email." });
  }
});

app.listen(port, () => {
  console.log(`Server is started at ${port}`);
});
