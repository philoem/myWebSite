let sending = require('./server')

sending.server()



//const express = require('express');
//const cors = require('cors');
//const bodyParser = require('body-parser');
//const nodemailer = require('nodemailer');
//let path = require('path');
//let propertiesReader = require('properties-reader');
//let props = propertiesReader(__dirname + '/.properties');
//const app = express();
//
//app.use(bodyParser.json());
//app.use(cors());
//app.use (express.static('myWebSite'));
//
//app.get('/', (req,res) => {
//    res.sendFile(path.resolve('src/app/content/content-form/content-form.component.html'));
//})
//app.post('/content/form', (req, res) => {
//    let data = req.body;
//    console.log(data);
//    let transporter = nodemailer.createTransport({
//        service: 'gmail',
//        host: props.get('smtp.host'),
//        secure: props.get('smtp.secure'),
//        port: props.get('smtp.port'),
//        auth: {
//            user: props.get('smtp.user'),
//            pass: props.get('smtp.password')
//        }
//    });
//    const mailOptions = {
//        from: `${data.name} 👻 <${data.mail}>`,
//        to: 'philoem24@gmail.com', // Cambia esta parte por el destinatario
//        subject: data.sujet,
//        html: `
//        <strong>Nombre:</strong> ${data.name} <br/>
//        <strong>E-mail:</strong> ${data.mail} <br/>
//        <strong>Mensaje:</strong> ${data.message}`
//    };
//    transporter.sendMail(mailOptions, function (err, info) {
//        if (err) {
//            console.log(err)
//        } else {
//            console.log(info);
//        }
//    });
//})
//app.listen(8080, () => {
//    console.log('Server Started')
//});