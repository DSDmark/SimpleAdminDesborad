import express from "express"
import authCtrl from "../controlles/authCtrl"

const router = express.Router()

router.post("/login", authCtrl.login);
router.post("/register", authCtrl.register);
router.post("/activation", authCtrl.accountActivation);
// router.get("*", (req, res) => res.status(400).json({ msg: "This rout not exists" }));

export default router;
