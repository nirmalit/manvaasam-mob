var nodemailer=require('nodemailer')
var email;

exports.transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service : 'Gmail',
    
    auth: {
      user: 'saikrishhh.ar@gmail.com',
      pass: 'Saidhoni@888',
    }
    
});
