var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "felipe.chernicharo@gmail.com",
    pass: "xxxxxxxxxxxxxx",
  },
});

var mailOptions = {
  from: "felipe.chernicharo@gmail.com",
  to: "string7dev@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
