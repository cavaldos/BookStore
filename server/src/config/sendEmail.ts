const nodemailer = require('nodemailer');

const sendEmail = async (email: string, code: string) => {
  try {
    // Tạo đối tượng transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'SteveGoldenApple@gmail.com', // Email của bạn
        pass: 'orrvgifrxefrnzyt', // Mật khẩu của bạn
      },
    });

    // Cấu hình nội dung email
    const mailOptions = {
      from: 'SteveGoldenApple@gmail.com', // Email nguồn
      to: email, // Email người nhận
      subject: 'Verify Code', // Tiêu đề email
      text: `Verify code${code}`, // Nội dung email (dạng plain text)
    };

    // Gửi email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

export { sendEmail };
