import { Router } from "express";
import {
  changeCurrentPassword,
  forgotPassword,
  getCurrentUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
  resendEmailVerification,
  resetPassword,
  verifyEmail,
} from "../controllers/auth.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { validate } from "../middlewares/validator.middleware.js";
import {
  userLoginValidator,
  userRegistrationValidator,
} from "../validators/index.js";

const router = Router();

// Unsecured routes
router
  .route("/register")
  .post(userRegistrationValidator(), validate, registerUser);
router.route("/login").post(userLoginValidator(), validate, loginUser);
router.route("/verify-email/:token").get(verifyEmail);
router.route("/refresh-token").post(refreshAccessToken);
router.route("/forgot-password").post(forgotPassword);
router.route("/reset-password/:token").post(resetPassword);

// Secured routes (require JWT authentication)
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/me").get(verifyJWT, getCurrentUser);
router.route("/change-password").post(verifyJWT, changeCurrentPassword);
router
  .route("/resend-verification-email")
  .post(verifyJWT, resendEmailVerification);

export default router;
