let http   = require('http'),
qs         = require('querystring'),
nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    port: 25,
    auth: {
    user: 'philoem24@gmail.com',
    pass: 'sunny321654987'
    },
    tls: {
        rejectUnauthorized: false
    }
});

let server = http.createServer(function(req, res) {
  if (req.method === 'POST' && req.url === '/') {
    let body = '';
    req.on('data', function (data) {
      body += data;
    });

    req.on('end', function () {
      let mail = qs.parse(body);

      let mailOptions = {
        from: mail.name+' <'+ mail.sender +'>',
        to: 'philoem24@gmail.com',
        subject: 'Contact ',
        text: 'Hello World!!!!'
      };

      transporter.sendMail(mailOptions, function(err, response){
        if(error) {
            console.log(error);
        }
        console.log('Le mail est parti');
        console.log(info);
        res.end();
      });
    });
  }
  res.end();
});

server.listen(1337);
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
//        from: '"Philou" <philoem@gmail.com>',
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