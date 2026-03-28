import Mailgen from "mailgen";
import nodemailer from "nodemailer";

const sendEmail = async (options) => {
  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Your Company",
      link: "https://yourcompany.com",
    },
  });

  const emailTextual = mailGenerator.generatePlaintext(options.mailgenContent);
  const emailHTML = mailGenerator.generate(options.mailgenContent);

  const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_SMTP_HOST,
    port: process.env.MAILTRAP_SMTP_PORT,
    auth: {
      user: process.env.MAILTRAP_SMTP_USER,
      pass: process.env.MAILTRAP_SMTP_PASS,
    },
  });

  const mailOptions = {
    from: "mail.project-management@example.com",
    to: options.email,
    subject: options.subject,
    text: emailTextual,
    html: emailHTML,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully to", options.email);
  } catch (error) {
    console.error("Email service failed to send email to", options.email);
    console.error("Error sending email:", error);
  }
};

const emailVerificationMailGenContent = (username, verificationUrl) => {
  return {
    body: {
      name: username,
      intro: "Welcome to our service! We're excited to have you on board.",
      action: {
        instructions:
          "To get started, please verify your email address by clicking the button below:",
        button: {
          color: "#22BC66",
          text: "Verify Email",
          link: verificationUrl,
        },
      },
      outro:
        "If you did not create an account, no further action is required. If you have any questions, feel free to reply to this email.",
    },
  };
};

const forgotPasswordMailGenContent = (username, passwordResetUrl) => {
  return {
    body: {
      name: username,
      intro: "We received a request to reset your password.",
      action: {
        instructions: "To reset your password, please click the button below:",
        button: {
          color: "#FF5733",
          text: "Reset Password",
          link: passwordResetUrl,
        },
      },
      outro:
        "If you did not request a password reset, no further action is required. If you have any questions, feel free to reply to this email.",
    },
  };
};

export {
  emailVerificationMailGenContent,
  forgotPasswordMailGenContent,
  sendEmail,
};
