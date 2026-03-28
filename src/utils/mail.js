import Mailgen from "mailgen";

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

export { emailVerificationMailGenContent, forgotPasswordMailGenContent };
