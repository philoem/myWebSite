//const nodemailer = require('nodemailer');
//const gmailEmail = encodeURIComponent(functions.config().gmail.email);
//const gmailPassword = encodeURIComponent(functions.config().gmail.password);
//const mailTransport = nodemailer.createTransport(`smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);
//
//exports.sendContactMessage = functions.database.ref('/messages/{pushKey}').onWrite(event => {
//    const snapshot = event.data;
//  // Only send email for new messages.
//    if (snapshot.previous.val() || !snapshot.val().name) {
//      return;
//    }
//    
//    const val = snapshot.val();
//    
//    const mailOptions = {
//      to: 'philoem24@gmail.com',
//      subject: `Information Request from ${val.name}`,
//      html: val.html
//    };
//    return mailTransport.sendMail(mailOptions).then(() => {
//      return console.log('Mail sent to: philoem24@gmail.com')
//    });
//  });

//let http   = require('http'),
//qs         = require('querystring'),
//nodemailer = require('nodemailer');
//
//let transporter = nodemailer.createTransport({
//    service: 'gmail',
//    secure: false,
//    port: 25,
//    auth: {
//    user: 'philoem24@gmail.com',
//    pass: 'sunny321654987'
//    },
//    tls: {
//        rejectUnauthorized: false
//    }
//});
//
//let server = http.createServer(function(req, res) {
//  if (req.method === 'POST' && req.url === '/') {
//    let body = '';
//    req.on('data', function (data) {
//      body += data;
//    });
//
//    req.on('end', function () {
//      let mail = qs.parse(body);
//
//      let mailOptions = {
//        from: mail.name+' <'+ mail.sender +'>',
//        to: 'philoem24@gmail.com',
//        subject: 'Contact ',
//        text: 'Hello World!!!!'
//      };
//
//      transporter.sendMail(mailOptions, function(err, response){
//        if(error) {
//            console.log(error);
//        }
//        console.log('Le mail est parti');
//        console.log(info);
//        res.end();
//      });
//    });
//  }
//  res.end();
//});
//
//server.listen(4200);


let express = require('express');
let bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
let app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'html');

app.get('/', function(req, res, next) {
    res.render('content-form.component');
});

app.post('/content/form', function(req, res) {
    /* Notre code pour nodemailer */
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'philoem24@gmail.com',
            pass: 'sunny321654987'
        }
    });
    let mailOptions = {
        from: req.body.sender,
        to: req.body.destination,
        subject: req.body.subject,
        text: req.body.message,
        html: '<b>' + req.body.message + '</b>'
    };
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
           return console.log(error);
        }
        console.log('Message sent: ' + info.response);
   });
   
   transporter.close();
});

app.use(function(req, res) {
    res.sendStatus(404);
});

app.listen(8080);
console.log('Le serveur App est en cours...')

//const nodemailer = require('nodemailer');
//function sending() {
//
//    let transporter = nodemailer.createTransport({
//        service: 'gmail',
//        secure: false,
//        port: 25,
//        auth: {
//            user: 'philoem24@gmail.com',
//            pass: 'sunny321654987'
//        },
//        tls: {
//            rejectUnauthorized: false
//        }
//    });
//    let helperOptions = {
//        from: '"Philou" <philoem24@gmail.com>',
//        to: 'philoem24@gmail.com',
//        subject: 'Hello World',
//        text: 'Hello World!!!!'
//    };
//    transporter.sendMail(helperOptions, (error, info) => {
//        if(error) {
//            console.log(error);
//        }
//        console.log('Le mail est parti');
//        console.log(info);
//    });
//    
//}
//sending();