import { log } from "console"
import { NextFunction, Response } from "express"
import jwt from "jsonwebtoken"
import User from "../models/userModel"
import { IDecodedToken, IReqAuth } from "../config/interface"

const { ACCESS_TOKEN_SECRET } = process.env

const headerAuth = async (req: IReqAuth, res: Response, next: NextFunction) => {
  try {
    const token = req.header("Authorization")
    if (!token) return res.status(400).json({ msg: "Invalid Auth" })

    const decoded = <IDecodedToken>jwt.verify(token, `${ACCESS_TOKEN_SECRET}`)
    if (!decoded) return res.status(400).json({ msg: "invalid Auth" })

    const user = await User.findOne({ _id: decoded.id }).select("-password");
    if (!user) return res.status(400).json({ msg: "User not exist" })
    req.user = user;

    next()
  } catch (err: any) {
    log(err)
    return res.status(500).json({ msg: err.message })
  }
}

export default headerAuth
