import jwt from "jsonwebtoken";

export const generateToken= (user, message, stautsCode, res) => {
    const token = user.generateWebToken()
    const cookieName = user.role === "Admin" ? 'AdminToken' : 'CustomerToken';

    res.status(stautsCode).cookie(cookieName, token, { expires: new Date(Date.now + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000), httpOnly: true,}).json({
        success: true,
        message,
        user,
        token
    })
}