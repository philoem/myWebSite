/*  Serveur pour envoyer les mails  */
let express = require('express');
let nodemailer = require("nodemailer");
let app = express();
let path = require('path');
let bodyParser = require('body-parser');
let propertiesReader = require('properties-reader');
let cors = require('cors');
let port = 8080;

let props = propertiesReader(__dirname + '/.properties');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use (express.static (__dirname + '/app/content-form'));
app.use(cors());

app.get('/', (req,res) => {
    res.sendFile(path.resolve('src/app/content/content-form/content-form.component.html'));
});
exports.server = function() {
    app.post('/content/form', (req,res) => {
        let data = req.body;
        console.log(data);
        let smtpTransport = nodemailer.createTransport({
            service: "gmail",
            host: props.get('smtp.host'),
            secure: props.get('smtp.secure'),
            port: props.get('smtp.port'),
            auth: {
                user: props.get('smtp.user'),
                pass: props.get('smtp.password')
            },
            tls: {
                rejectUnauthorized: false
            }
        });
        let mailOptions = {
            from: data.name,
            to: 'philoem24@gmail.com',
            subject: data.suject,
            text: data.message
        };
        console.log(mailOptions);
        smtpTransport.sendMail(mailOptions, (error, response) => {
            if(error){
                console.log("Email could not send due to error: " +error);
            }else {
                console.log("Message sent: " + data.message);
            res.end("sent");
            }
        });
    });
    
    /*--------------------Routing Over----------------------------*/
    
    app.listen(port, () => {
        console.log("Server Started on port : "+ port);
    });
}

//const nodemailer = require('nodemailer');
//let propertiesReader = require('properties-reader');
//let props = propertiesReader(__dirname + '/.properties');
//module.exports = (form) => {
// var transporter = nodemailer.createTransport({
// service: 'gmail',
// host: props.get('smtp.host'),
// secure: props.get('smtp.secure'),
// port: props.get('smtp.port'),
// auth: {
// user: props.get('smtp.user'),
// pass: props.get('smtp.password')
// }
// });
//const mailOptions = {
//    from: form.name,
//    to: 'philoem24@gmail.com',
//    subject: form.suject,
//    text: form.message
// };
//transporter.sendMail(mailOptions, function (err, info) {
// if (err)
// console.log(err)
// else
// console.log(info);
// });
//}