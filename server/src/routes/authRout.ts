import express from "express"
import authCtrl from "../controlles/authCtrl"

const router = express.Router()

// create account 
router.post("/register", authCtrl.register);

// activating account by generating token by user email
router.post("/activation", authCtrl.accountActivation);

// login 
router.post("/login", authCtrl.login);

// adding cookies by refresh token
router.post("/user/rf_token", authCtrl.rftVarification);

// removing refresh token for logout
router.post("/logout", authCtrl.logout);

// generating url for reserting password through mail
router.post("/forget_password", authCtrl.forgetPassword);

export default router;
