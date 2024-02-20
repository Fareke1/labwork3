const express=require('express')
const router=express.Router()
const nodemailer=require('nodemailer')


router.post('/send-email', (req, res) => {
    const { to, subject, message,service } = req.body;
    console.log(`to:${to},subject:${subject},message:${message},service:${service}`)



  
    function getTransporter(service) {
        let transporterConfig;

     
                transporterConfig = {
                    host: 'smtp'+service,
                    port: 587,
                    secure: false,
                    auth: {
                        user: 'zhanik.planet1@gmail.com',
                        pass: 'frvq ruyt wfqn yimo'
                    }
                };
        
        

        return nodemailer.createTransport(transporterConfig);
    }

    const transporter = getTransporter(service);

    const mailOptions = {
        from: 'zhanik.planet1@gmail.com',
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