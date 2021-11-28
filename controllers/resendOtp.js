const {generateOtp}=require('../utils/otp')
const {sendmail}=require('../utils/sendEmail')

function resendOtp(req,res){
    const otp=generateOtp(req.body.email)
        var mailOptions = {
            to: req.body.email,
            subject: "Otp for registration is: ",
            html: "<h3>OTP for account verification is </h3>" + "<h1 style='font-weight:bold;'>" + otp + "</h1>" // html body
        };
        sendmail(mailOptions)
}

module.exports={resendOtp}