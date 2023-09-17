const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

const sendEmail1 = async (email, confirmationCode) => {
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const formattedNow = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  console.log(formattedNow);

  try {
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: 'Confirmation Code For Book Store',
      text: `Dear Sir/Madam,
      ${confirmationCode} is your confirmation code.
      Timestamp: ${formattedNow}`,
    };

    await transporter.sendMail(mailOptions);
    console.log('Confirmation email sent');
  } catch (error) {
    console.error('Error sending confirmation email:', error);
  }
};

module.exports = { sendEmail1 };
