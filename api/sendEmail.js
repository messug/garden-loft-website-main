const nodemailer = require("nodemailer");

export default async function sendEmail(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed" });
  }

  const { formType, formData } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail address
      pass: process.env.EMAIL_PASS, // App password generated in Gmail
    },
  });

  // Email to be sent to your Gmail
  const adminMailOptions = {
    from: process.env.EMAIL_USER,
    to: "info@gardenloft.ca",
    subject: `${formType} Submission`,
    text: `New ${formType} submission:\n\n${JSON.stringify(formData, null, 2)}`,
  };

  // Confirmation email to the person who submitted the form
  const userMailOptions = {
    from: process.env.EMAIL_USER,
    to: formData.email, // Send to user's email from formData
    subject: `Thank you for your ${formType} request`,
    text: `Hello ${formData.firstName},\n\nThank you for your interest in Garden Loft. We have received your ${formType} request and will get back to you shortly.\n\nBest regards,\nGarden Loft Team`,
  };

  try {
    // Send email to your Gmail
    await transporter.sendMail(adminMailOptions);

    // Send confirmation email to the user
    await transporter.sendMail(userMailOptions);

    res.status(200).json({ message: "Emails sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email." });
  }
}
