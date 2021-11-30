// import { totp } from 'otplib';
const {totp}=require('otplib')
// Set OTP expiration to 300 seconds
totp.options = {
    step: 120,
    window: [2, 0]
};

const generateOtp = (secret) => {
    const token = totp.generate(secret);
    return token;
};

const verifyOtp = (token, secret) => {
    return totp.verify({ token, secret });
};

module.exports= { generateOtp, verifyOtp };