import { Response, Request } from "express"
import User from "../models/userModel"
import bcrypt from "bcrypt";
import { generateAccessToken, generateActiveToken, generateRefreshToken } from "../middleware/generateToken";
import { validateMail } from "../middleware/validation";
import { log } from "console";
import mailSender from "../config/mail";
import jwt from "jsonwebtoken";
import { IDecodedToken, IReqAuth, IUser } from "../config/interface";

const { BASE_URL, ACTIVE_TOKEN_SECRET, REFRESH_TOKEN_SECRET } = process.env

const authCtrl = {
  register: async (req: Request, res: Response) => {
    try {
      const { firstName, lastName, location, account, password } = req.body;

      // checking if user exist or not
      const newMail =   await User.findOne({ account })
      if (newMail) return res.status(400).json({ msg: "This email is already exist" })
      if (password.length < 8) return res.status(400).json({ msg: "Your password is too short" })
      const hashPassword = await bcrypt.hash(password, 12)

      const newUser = {
        firstName, lastName, location, account, password: hashPassword
      }

      const active_token = generateActiveToken({ newUser })
      const url = `${BASE_URL}/api/activation/${active_token}`

      if (validateMail(account)) {
        mailSender(account, url, "pleace varify youseft:")
        return res.json({ msg: "please check your mail 📫", url })
      } else {
        return res.status(500).json({ msg: `Your mail ${account} is not valid` })
      }
    } catch (err) {
      return res.status(500).json({ msg: err })
    }
  },
  accountActivation: async (req: Request, res: Response) => {
    try {
      const { active_token } = req.body;

      const decoded = <IDecodedToken>jwt.verify(active_token, `${ACTIVE_TOKEN_SECRET}`);
      const { newUser } = decoded;

      if (!newUser) return res.status(400).json({ msg: "Invalid activation of account" })
      const user = await User.findOne({ account: newUser.account })
      if (user) return res.status(400).json({ msg: "Account already exist" })

      const new_user = new User(newUser)
      await new_user.save();

      return res.json({ msg: "Account has been activated" })
    } catch (err) {
      log(err)
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
  logout: async (req: IReqAuth, res: Response) => {
    if (!(req.user)) return res.status(500).json({ msg: "Invalid auth" })
    try {
      res.clearCookie("rf_token", { path: "/api/rf_token" })

      await User.findOneAndUpdate({ _id: req.user._id }, {
        rf_token: " "
      })

      return res.json({ msg: "Logged out!" })

    } catch (err: any) {
      log(err)
      return res.status(500).json({ msg: err.message });
    }
  },
  rftVarification: async (req: Request, res: Response) => {
    try {
      const rf_token = req.cookies.rf_token;
      if (!rf_token) {
        return res.status(400).json({ msg: "Please login now!" });
      }
      const decoded = <IDecodedToken>jwt.verify(rf_token, `${REFRESH_TOKEN_SECRET}`);
      if (!decoded) return res.status(400).json({ msg: "Invalid auth`" })

      const user = await User.findById(decoded.id).select("-password +rf_token")
      log(user)
      if (!user) return res.status(400).json({ msg: "This account does not exist." });

      if (rf_token !== user.rf_token) return res.status(400).json({ msg: "This account does not exist." });
      const access_token = generateAccessToken({ id: user._id });
      return res.json({ access_token })
    } catch (err: any) {
      log(err)
      res.status(500).json({ msg: err.message })
    }
  },
  forgetPassword: async (req: Request, res: Response) => {
    try {
      const { account } = req.body;
      const user = await User.findOne({ account })

      // checking if user exist or not
      if (!user) return res.status(400).json({ msg: "Email is not exist" })

      const access_token = generateAccessToken({ id: user._id })
      const url = `${BASE_URL}/api/user/reset_password/${access_token}`;

      if (validateMail(account)) {
        mailSender(account, url, "Resert your mail")
        return res.json({ msg: `Please check your mail`, url: url })
      } else {
        return res.status(500).json({ msg: "valid mail" })
      }
    } catch (err: any) {
      log(err)
      return res.status(500).json({ msg: err.message })
    }
  }
}

const checkUser = async (user: IUser, password: string, res: Response) => {
  const isMatch = await bcrypt.compare(password, user.password)

  // checking if user entered right password
  if (!isMatch) {
    return res.status(400).json({ msg: "Credential are not valid ❌" })
  }
  const rf_token = generateRefreshToken({ id: user._id }, res)

  await User.findOneAndUpdate({ _id: user._id }, {
    rf_token: rf_token
  })

  res.json({ msg: "login successfull ✅", user: { ...user._doc, password: "", rf_token } })
}

export default authCtrl;
