import { Router } from "express";
import { loginUser, registerUser } from "../controllers/auth.controller.js";
import { userRegistrationValidator } from "../validators/index.js";
import { validate } from "../middlewares/validator.middleware.js";

const router = Router();

router
  .route("/register")
  .post(userRegistrationValidator(), validate, registerUser);

router.route("/login").post(loginUser);

export default router;
