import { Response } from "express"
import User from "../models/userModel"
import { IReqAuth } from "../config/interface"
import { error } from "console"
import bcrypt from "bcrypt"

const userCtrl = {
  resertPassword: async (req: IReqAuth, res: Response) => {
    if (!req.user) return res.status(400).json({ msg: "Invalid Authentication." })

    try {
      const { password } = req.body;

      if (!password) return res.status(400).json({ msg: "Please enter new password" })

      const hash = await bcrypt.hash(password, 12)
      await User.findOneAndUpdate({ _id: req.user._id }, {
        password: hash
      })

      res.json({ msg: "Resert Password Success!" })

    } catch (err: any) {
      error(err)
      return res.status(500).json({ msg: err.message })

    }
  }
}

export default userCtrl;
