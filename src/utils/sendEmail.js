const send=require('../utils/Gmailconfig')

const sendmail=(mailOptions)=>{
send.transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
});
}
module.exports={sendmail}