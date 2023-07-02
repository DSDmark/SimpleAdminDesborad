import nodemailer, { TransportOptions } from "nodemailer"
import { OAuth2Client, auth } from "google-auth-library"
import dotenv from "dotenv"
dotenv.config();

const OAUTH_PLAYGROUND = "https://developers.google.com/oauthplayground";

const {
  MAIL_SERVICE_CLIENT_ID,
  MAIL_SERVIVE_SECRET,
  MAIL_SERVICE_REFRESH_TOKEN,
  SENDER_MAIL,
} = process.env

const mailSender = async (to: string, url: string, txt: string) => {
  const oauth = new OAuth2Client(
    MAIL_SERVICE_CLIENT_ID,
    MAIL_SERVIVE_SECRET,
    OAUTH_PLAYGROUND
  )

  oauth.setCredentials({ refresh_token: MAIL_SERVICE_REFRESH_TOKEN })
  const mailTemplate = `<!DOCTYPE html><html><head> <meta charset="UTF-8"> <title>Email Template</title> <style> body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f1f1f1; } .container { max-width: 600px; margin: 20px auto;  background: linear-gradient(to bottom, #000, #e6e6e6);border-radius: 5px;box-shadow: 0 2px 5px rgba(0,0,0,0.1);padding: 20px;} .header { background-color: #ffffff; padding: 10px 0; border-bottom: 1px solid #dddddd; text-align: center; } .content { padding: 20px 0; } .footer { background-color: #f1f1f1; padding: 10px 0; border-top: 1px solid #dddddd; text-align: center; } </style></head><body> <div class="container"> <div class="header"> <h1>Varification Mail 📫</h1> </div> <div class="content"> <p>Hello ${to},</p> <p>${txt}</p><button style="color:white;background:red;padding:1rem;">Varify Yourself</button><p>Regards,</p> <p>AdminDesborad-CMSystem</p></div><div class="footer"> <p>&copy; 2023 AdminDesborad-CMSystem. All rights reserved.</p> </div> </div></body></html>`
  try {
    const access_token = await oauth.getAccessToken();
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: SENDER_MAIL,
        clientId: MAIL_SERVICE_CLIENT_ID,
        clientSecret: MAIL_SERVIVE_SECRET,
        refreshToken: MAIL_SERVICE_REFRESH_TOKEN,
        accessToken: access_token
      }
    } as TransportOptions)

    const mailOptions = {
      from: SENDER_MAIL,
      to,
      subject: "Varification Mail",
      html: mailTemplate,
    }
    const res = await transport.sendMail(mailOptions);
    return res;
  } catch (err) {
    console.log(err)
  }
}

export default mailSender;
