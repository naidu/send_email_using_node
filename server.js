'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');

  var nodemailer = require('nodemailer'); 
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'cutjulianalaksamana@gmail.com',
      pass: 'nuncstbtzpllqudo'
    }
  });

  var mailOptions = {
    from: 'cutjulianalaksamana@gmail.com',
    to: 'janakiram@hotmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);