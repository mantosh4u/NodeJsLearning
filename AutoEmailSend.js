// we need to include 'fs' and 'nodemailer'. 'fs' module
// is to read the file content and 'nodemailer' module is
// to send the email.
const  fs      = require('fs');
var nodemailer = require('nodemailer');

// Main start from this location.
console.log(">> Main Start");

// Initialize the transporter object. this object contains the
// source email/server information. "pass" should be populated
// from some secure way(like reading some registry). For similicity
// I have assigned actual value.
var transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user:'xxxxxxxxxxxx@gmail.com',
        pass:'Xxxxx@Xxxxx'
        }
    });

// process.agrv[1] means the current executing script. This is similar
// as other programming languages way to get the run time agruments.
// We can pass any other file name and change the below logic.
var  fileName = process.argv[1];
console.log("File To Read: " + fileName);

// As we now have fileName which we want to read. 'readFile' API would be
// used to read it. If successfull, then we create the 'mailOptions' object
// which would have all the data with respect to the recipients emails id
// and the content of mail. sendMail() API does the actual work of sending
// the email.
// => is lambda expression way of function usages.
fs.readFile(fileName, (err,data) => {
    if (err)
        throw err;
    // console.log(data.toString());
    
    var mailOptions = new Object();
    mailOptions.from ="mantoshlearn@gmail.com";
    mailOptions.to ="mantosh4u@gmail.com";
    mailOptions.subject ="Sending Automated Mail Using Node.js";
    mailOptions.text = data.toString();


    // If sendMail() API is sucessfull, we have logged recieved from the server.
    // function() has been used instead of => lambda expression.
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

});


// Main ends at this point.
console.log("<< Main End");