import { Response, Request } from "express"
import User, { IUser } from "../models/userModel"
import bcrypt from "bcrypt";
import { generateActiveToken, generateRefreshToken } from "../middleware/generateToken";
import { validateMail } from "../middleware/validation";
import mailSender from "../config/mail";
import jwt from "jsonwebtoken";
import { IDecodedToken } from "../config/interface";

const { BASE_URL, ACTIVE_TOKEN_SECRET } = process.env

const authCtrl = {
  register: async (req: Request, res: Response) => {
    try {
      const { firstName, lastName, location, account, password } = req.body;

      // checking if user exist or not
      const newMail = await User.findOne({ account })
      if (newMail) return res.status(400).json({ msg: "This email is already exist" })
      if (password.length < 8) return res.status(400).json({ msg: "Your password is too short" })
      const hashPassword = await bcrypt.hash(password, 12)

      const newUser = {
        firstName, lastName, location, account, password: hashPassword
      }

      const active_token = generateActiveToken({ newUser })
      const url = `${BASE_URL}/active/${active_token}`

      if (validateMail(account)) {
        mailSender(account, url, "pleace varify youseft:")
        return res.json({ msg: "Token generate successfully, pleace check your mail 📫", url })
      }

      return res.status(200).json({ msg: "Account is created ✅" })
    } catch (err) {
      return res.status(500).json({ msg: err })
    }
  },
  accountActivation: async (req: Request, res: Response) => {
    try {
      const { active_token } = req.body;

      const decoded = <IDecodedToken>jwt.verify(active_token, `${ACTIVE_TOKEN_SECRET}`);

      const { newUser } = decoded;

      if (!newUser) return res.status(400).json({ msg: "Invalid auth`" })

      const user = await User.findOne({ account: newUser.account })
      if (user) return res.status(400).json({ msg: "Account already exist" })

      const new_user = new User(newUser)
      await new_user.save();

      res.json({ msg: "Account has been activated" });
      // const new_user = await new User(newUser).save();

    } catch (err) {
      console.log(err)
      return res.status(500).json({ msg: err })
    }
  },
  login: async (req: Request, res: Response) => {
    try {
      const { account, password } = req.body
      const user = await User.findOne({ account })
      // checking if user account exist or not in database
      if (!user || !password) return res.status(400).json("You need to register first.")
      checkUser(user, password, res);

    } catch (err) {
      return res.status(400).json({ msg: "Credential are not valid ❌" })
    }
  },
  rftVarification: async (req: Request, res: Response) => {

  }
}

const checkUser = async (user: IUser, password: string, res: Response) => {
  const isMatch = await bcrypt.compare(password, user.password)

  // checking if user entered right password
  if (!isMatch) {
    return res.status(400).json({ msg: "Credential are not valid ❌" })
  }

  const rf_token = generateRefreshToken({ id: user._id }, res)
  res.json({ msg: "login successfull ✅", user: { ...user._doc, password: "", rf_token } })
}


export default authCtrl;
