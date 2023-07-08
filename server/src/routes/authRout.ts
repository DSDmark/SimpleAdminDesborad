import express from "express"
import authCtrl from "../controlles/authCtrl"

const router = express.Router()

router.post("/login", authCtrl.login);
router.post("/register", authCtrl.register);
router.post("/activation", authCtrl.accountActivation);
router.post("/rftoken", authCtrl.rftVarification);

export default router;
