import jwt from "jsonwebtoken";
import otpGenerator from 'otp-generator'
import nodemailer from 'nodemailer'
import ErrorHandler from "../Middleware/ErrorHandler.js";

export const generateToken = (user, message, stautsCode, res) => {
  const token = user.generateWebToken();
  const cookieName = user.role === "Admin" ? "AdminToken" : "CustomerToken";

  res
    .status(stautsCode)
    .cookie(cookieName, token, {
        httpOnly: true,
    })
    .json({
      success: true,
      message,
      user,
      token,
    });
};

export const SendOtp = async(username, email, password, message, statusCode, res) => {
  const otp = otpGenerator.generate(4, { digits: true, lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false})

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.ETHEREAL_USEREMAIL,
      pass: process.env.ETHEREAL_PASSWORD,
    },
  });

  const info = await transporter.sendMail({
    from: `"Pratham Patel 👻" <prathampatel5553@gmail.com>`, // sender address
    to: email, // list of receivers
    subject: "One Time Password For Registration", // Subject line
    text: `Hello ${username}, Here is Your OTP for registration in Patel's Dryfruit And Masala, Otp: ${otp}`,
  });

  console.log("Message Sent", info.messageId)

  res.status(200).json({
    success: true,
    message: "Otp Sent Successfully",
    username,
    email,
    password,
    otp
  })
}

export function checkForAuthentication(cookieName) {
  return(req,res,next)=>{
    const token = req.cookies[cookieName]
    if(!token) return next()
    
    try {
      const userPayload = jwt.verify(token, process.env.JWT_SECRET_KEY)
      req.user = userPayload
    } catch (error) {
      console.log(error)
    }
    return next()
  }
}