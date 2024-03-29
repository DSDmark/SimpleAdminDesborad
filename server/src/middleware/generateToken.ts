import jwt from "jsonwebtoken"
import { Response } from "express"

const {
  ACTIVE_TOKEN_SECRET,
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET
} = process.env

export const generateActiveToken = (payload: object) => {
  return jwt.sign(payload, `${ACTIVE_TOKEN_SECRET}`, { expiresIn: "5m" })
}

export const generateAccessToken = (payload: object) => {
  return jwt.sign(payload, `${ACCESS_TOKEN_SECRET}`, { expiresIn: "15m" })
}

export const generateRefreshToken = (payload: object, res: Response) => {
  const rf_token = jwt.sign(payload, `${REFRESH_TOKEN_SECRET}`, { expiresIn: "30d" })
  res.cookie("rf_token", rf_token, {
    httpOnly: true,
    path: "/api/rf_token",
    maxAge: 30 * 24 * 60 * 60 * 1000   // for 30 day according jwt we define above
  })

  return rf_token
}
