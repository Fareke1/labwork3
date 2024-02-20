const express=require('express')
const router=express.Router()
const nodemailer=require('nodemailer')


router.post('/send-email', (req, res) => {
    const { to, subject, message } = req.body;
    console.log(`to:${to},subject:${subject},message:${message}`)



  
    function getTransporter(to) {
        let transporterConfig;

     
                transporterConfig = {
                    host: 'smtp.gmail.com',
                    port: 587,
                    secure: false,
                    auth: {
                        user: 'farekeu@gmail.com',
                        pass: 'diph rcvy lcvk qudk'
                    }
                };
        
        

        return nodemailer.createTransport(transporterConfig);
    }

    const transporter = getTransporter(to);

    const mailOptions = {
        from: 'farekeu@gmail.com',
        to: to,
        subject: subject,
        message: message
    };

    console.log(mailOptions)

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to send email' });
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json({ message: 'Email sent successfully' });
        }
    });
});

module.exports = router;