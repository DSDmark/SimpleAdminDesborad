import express from "express"
import userCtrl from "../controlles/userCtrl";
import headerAuth from "../middleware/headerAuth";

const router = express.Router()

// changing password by access token 
router.post("/user/reset_password", headerAuth, userCtrl.resertPassword);

export default router;

